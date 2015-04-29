/*---------------------------------------------------------
 * Copyright (C) Nobody yet. All rights reserved.
 *--------------------------------------------------------*/
/// <reference path="../../declares.d.ts" />
'use strict';
define(["require", "exports", '../puppetDef', 'monaco-testing'], function (require, exports, puppetDef, T) {
    var tokenize = T.createTokenize(rubyDef.language);
    var assertTokens = T.assertTokens;
    T.module('Puppet Colorizer');
    T.test('Keywords', function () {
        var tokens = tokenize('class include def init() end').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'keyword.class.puppet' },
            { startIndex: 5, type: 'white.puppet' },
            { startIndex: 6, type: 'constructor.identifier.puppet' },
            { startIndex: 11, type: 'white.puppet' },
            { startIndex: 12, type: 'keyword.def.puppet' },
            { startIndex: 15, type: 'white.puppet' },
            { startIndex: 16, type: 'identifier.puppet' },
            { startIndex: 20, type: 'delimiter.parenthesis.puppet' },
            { startIndex: 21, type: 'delimiter.parenthesis.puppet' },
            { startIndex: 22, type: 'white.puppet' },
            { startIndex: 23, type: 'keyword.def.puppet' }
        ]);
    });
    T.test('Single digit', function () {
        var tokens = tokenize('x == 1 ').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'identifier.puppet' },
            { startIndex: 1, type: 'white.puppet' },
            { startIndex: 2, type: 'operator.puppet' },
            { startIndex: 4, type: 'white.puppet' },
            { startIndex: 5, type: 'number.puppet' },
            { startIndex: 6, type: 'white.puppet' }
        ]);
    });
});
