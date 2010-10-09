
// -- kriskowal Kris Kowal Copyright (C) 2009-2010 MIT License
// -- cadorn Christoph Dorn

// NOTE: when this file is being loaded as part of the
// Narwhal bootstrapping process, all of the "requires" that
// occur here have to be manually accounted for (who loads
// the loader?)

var ENGINE = require("narwhal/engine");
// HACK: the stars prevent the file module from being sent to browser
//  clients with the regexen we're using.  we need a real solution
//  for this.
var FS = require(/**/"narwhal/fs"/**/);

// this gets swapped out with a full fledged-read before
//  we're done using it
var read = FS.read;

exports.Loader = function (options) {
    var loader = {};
    var factories = options.factories || {};
    var paths = options.paths;
    var extensions = options.extensions || ["", ".js"];
    var timestamps = {};
    var debug = options.debug;

    loader.resolve = exports.resolve;

    loader.resolvePkg = function(id, baseId, pkg, basePkg) {
        return exports.resolvePkg(loader, id, baseId, pkg, basePkg);
    };

    loader.find = function (topId) {
        // if it's absolute only search the "root" directory.
        // FS.join() must collapse multiple "/" into a single "/"
        var searchPaths = FS.isAbsolute(topId) ? [""] : paths;

        for (var j = 0; j < extensions.length; j++) {
            var extension = extensions[j];
            for (var i = 0; i < searchPaths.length; i++) {
                var path = FS.join(searchPaths[i], topId + extension);
                if (FS.isFile(path))
                    return path;
            }
        }
        throw new Error("require error: couldn't find \"" + topId + '"');
    };

    loader.fetch = function (topId, path) {
        if (!path)
            path = loader.find(topId);
        if (typeof FS.lastModified === "function")
            timestamps[path] = FS.lastModified(path);
        if (debug)
            print('loader: fetching ' + topId);
        var text = read(path, {
            'charset': 'utf-8'
        });
        // we leave the endline so the error line numbers align
        text = text.replace(/^#[^\n]+\n/, "\n");
        return text;
    };

    loader.Module = function (text, topId, path) {
        if (ENGINE.Module) {
            if (!path)
                path = loader.find(topId);
            var factory = ENGINE.Module(text, path, 1);
            factory.path = path;
            return factory;
        } else {
            return function (inject) {
                var keys = [], values = [];
                for (var key in inject) {
                    if (Object.prototype.hasOwnProperty.call(inject, key)) {
                        keys.push(key);
                        values.push(inject[key]);
                    }
                }
                return Function.apply(null, keys).apply(this, values);
            };
        }
    };

    loader.load = function (topId, path) {
        if (!Object.prototype.hasOwnProperty.call(factories, topId)) {
            loader.reload(topId, path);
        } else if (typeof FS.lastModified === "function") {
            var path = loader.find(topId);
            if (loader.hasChanged(topId, path))
                loader.reload(topId, path);
        }
        return factories[topId];
    };

    loader.reload = function (topId, path) {
        factories[topId] = loader.Module(loader.fetch(topId, path), topId, path);
    };

    loader.isLoaded = function (topId) {
        return Object.prototype.hasOwnProperty.call(factories, topId);
    };

    loader.hasChanged = function (topId, path) {
        if (!path)
            path = loader.resolve(topId);
        return (
            !Object.prototype.hasOwnProperty.call(timestamps, path) ||
            FS.lastModified(path) > timestamps[path]
        );
    };

    loader.paths = paths;
    loader.extensions = extensions;

    return loader;
};

exports.resolve = function (id, baseId) {
    id = String(id);
    if (id.charAt(0) == ".") {
        id = FS.directory(baseId) + "/" + id;
    }
    // module ids need to use forward slashes, despite what the OS might say
    return FS.normal(id).replace(/\\/g, '/');
};

exports.resolvePkg = function(loader, id, baseId, pkg, basePkg) {
    if(!loader.usingCatalog) {
        // no usingCatalog - fall back to default
        return [exports.resolve(id, baseId), null];
    }
    if(pkg) {
        // locate id in pkg
        if(basePkg && loader.usingCatalog[basePkg]) {
            // see if pkg is an alias                
            var packages = loader.usingCatalog[basePkg].packages;
            if(packages[pkg]) {
                if(loader.usingCatalog[packages[pkg]]) {
                    var path = loader.usingCatalog[packages[pkg]].libPath;
                    return [exports.resolve("./" + id, path + "/"), packages[pkg]];
                } else {
                    throw "Package '"+packages[pkg]+"' aliased with '"+pkg+"' in '"+basePkg+"' not found";
                }
            }
        }
        // see if pkg is a top-level ID             
        if(loader.usingCatalog[pkg]) {
            var path = loader.usingCatalog[pkg].libPath;
            return [exports.resolve("./" + id, path + "/"), pkg];
        } else {
            throw "Package '" + pkg + "' not aliased in '"+basePkg+"' nor a top-level ID";
        }
    } else {
        // if id is relative we want a module relative to basePkg if it exists
        if(id.charAt(0) == "." && basePkg) {
            // if baseId is absolute we use it as a base and ignore basePkg
            if (FS.isAbsolute(baseId)) {
                path = FS.Path(baseId);
            } else if (loader.usingCatalog[basePkg]) {
                path = loader.usingCatalog[basePkg].libPath.join(baseId);
            } else {
                throw "basePkg '" + basePkg + "' not known";
            }
            
            // try and locate the path - at this stage it should be found
            return [exports.resolve(id, path.valueOf()), basePkg];
            
        } else {
            // id is not relative - resolve against system modules
            return [exports.resolve(id, baseId), undefined];
        }
    }
};

