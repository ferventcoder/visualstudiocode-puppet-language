/*---------------------------------------------------------
 * Copyright (C) Nobody yet. All rights reserved.
 *--------------------------------------------------------*/
/// <reference path="../declares.d.ts" />
'use strict';
define(["require", "exports", './puppetDef', 'monaco'], function (require, exports, puppetDef, monaco) {
    monaco.Modes.registerMonarchDefinition('puppet', puppetDef.language);
    monaco.Modes.loadInBackgroundWorker(require.toUrl('./puppetWorker.js')).then(function (workerPiece) {
    }, function (err) {
        console.error(err);
    });
});
