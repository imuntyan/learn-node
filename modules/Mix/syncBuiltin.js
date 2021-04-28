const fs = require('fs');
const assert = require('assert');
const { syncBuiltinESMExports } = require('module');

fs.readFile = newAPI;

delete fs.readFileSync;

function newAPI() {
    // ...
}

fs.newAPI = newAPI;

syncBuiltinESMExports();

import('fs').then((esmFS) => {
    // It syncs the existing readFile property with the new value
    assert.strictEqual(esmFS.readFile, newAPI);
    // readFileSync has been deleted from the required fs
    assert.strictEqual('readFileSync' in fs, false);
    // syncBuiltinESMExports() does not remove readFileSync from esmFS
    assert.strictEqual('readFileSync' in esmFS, true);
    // syncBuiltinESMExports() does not add names
    assert.strictEqual(esmFS.newAPI, undefined);
});