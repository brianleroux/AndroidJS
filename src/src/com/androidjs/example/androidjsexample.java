package com.androidjs.example;

import android.content.Intent;
import android.os.Bundle;
import comikit.droidscript.*;
import android.util.Log;

public class androidjsexample extends DroidScriptActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
		Intent intent = getIntent();
		intent.putExtra("ScriptAsset", "androidjs/android.js");
		super.onCreate(savedInstanceState);
    }
}