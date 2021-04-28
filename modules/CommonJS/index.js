const a = arguments

console.log(a)
console.log("*******************************")

console.log(process.execArgv)
console.log("*******************************")

exports.id = 'index';
console.log('In index', module);
console.log("*******************************")
const UTIL = require('./lib/util');
console.log('UTIL:', UTIL);


console.log("*******************************")

setImmediate(() => {
  console.log('The index.js module object is now loaded!', module)
  console.log("*******************************")
  console.log('The UTIL module object is now loaded!', UTIL)
  console.log("*******************************")
});
