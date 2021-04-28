console.log("loading util.js")

function fun1() {
    console.log('fun1')
}

function fun2() {
    console.log('fun2')
}

export {fun1 as fun, fun2};

export default fun1;

export function fun3() {
    fun2();
}
