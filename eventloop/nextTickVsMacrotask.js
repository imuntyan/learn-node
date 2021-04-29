
// process.nextTick executes immediately after currently executing callback, even if there are other callbacks waiting in the current phase
// the following code always produces
// SETIMMEDIATE 1
// NEXTTICK 1
// SETIMMEDIATE 2
// SETTIMEOUT 1

/*
 * The outer setTimeout schedules three callbacks:
 * one for setTimeout (SETTIMEOUT 1) and two for setImmediate (SETIMMEDIATE 1 and SETIMMEDIATE 2)
 *
 * Two setImmediate callbacks are scheduled to run in the next CHECK phase
 * The first one schedules process.nextTick. nextTick runs right after the first
 * setImmediate callback finishes and before the second setImmediate callback in the same phase
 *
 * SETTIMEOUT 1 is never executed before the SETIMMEDIATE 2, thus proving that SETIMMEDIATE 2 executes in the
 * same phase as SETIMMEDIATE 1
 */

setTimeout( () => {
    setImmediate(() => {
        console.log("SETIMMEDIATE 1")
        process.nextTick( () => {
            console.log("NEXTTICK 1");
        });
    });

    setTimeout( () => {
        console.log("SETTIMEOUT 1");
    }, 0);

    setImmediate(() => {
        console.log("SETIMMEDIATE 2");
    });


}, 0);

