// https://www.voidcanvas.com/setimmediate-vs-nexttick-vs-settimeout/#setimmediate-runs-before-settimeoutfn-0

//index.js

// non-deterministic order of TIMEOUT 1, TIMEOUT 2 and SETIMMEDIATE 1:

// run 1
// TIMEOUT 1
// TIMEOUT 2
// SETIMMEDIATE 1
//
// run 2
// TIMEOUT 1
// SETIMMEDIATE 1
// TIMEOUT 2
//
// run 3
// SETIMMEDIATE 1
// TIMEOUT 1
// TIMEOUT 2

setTimeout(function() {
    console.log("TIMEOUT 1");
}, 0);
setTimeout(function() {
    console.log("TIMEOUT 2");
}, 0);
setImmediate(function() {
    console.log("SETIMMEDIATE 1");
});
setTimeout(function() {
    console.log("TIMEOUT 3");
    setImmediate(function() {
        console.log("SETIMMEDIATE 2");
    });
}, 0);
