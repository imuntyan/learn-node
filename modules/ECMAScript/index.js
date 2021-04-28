import { syncBuiltinESMExports } from 'module';

const log = f => {
    console.log("executing", f.name);
    f();
}

import { fun as f1, fun2 as f2 } from './lib/util.js';
log(f1);
log(f2);

import funxx from './lib/util.js'
log(funxx);

const {default: deff, fun: funalias, fun2: fun2alias, fun3} = await import('./lib/util.js?#2');
log(deff);
log(funalias);
log(fun2alias);
console.log("*******************************");

import 'data:text/javascript,console.log("hello!");';

setImmediate(() => {
});
