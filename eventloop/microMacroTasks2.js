// https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/


const eventLoopRecursive = (fn) => () => {
    console.log('script start')
    let cnt = 0;
    const cb = () => {
        cnt += 1;
        if (cnt % 1000000 === 0)
            console.log("callback called ", cnt);
        fn(cb);
    }

    process.nextTick(cb)
    setImmediate(() => {
        console.log("setImmediate 1")
    })
}
// this starves the thread
const nextTickRecursive = eventLoopRecursive(process.nextTick);

const setImmediateRecursive = eventLoopRecursive(cb => setImmediate(cb));

// this fails with
// FATAL ERROR: MarkCompactCollector: young object promotion failed Allocation failed - JavaScript heap out of memory
// Process finished with exit code 134 (interrupted by signal 6: SIGABRT)
const setImmediateExplosiveRecursive = eventLoopRecursive(cb => {
    setImmediate(cb);
    setImmediate(cb);
});

setTimeout(() => console.log('setTimeout executed'), 100);

setImmediateRecursive()