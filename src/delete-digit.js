const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n += ''
  n = n.split('')
  let r = n.slice();
  let result=[];
  for(let i = 0; i < n.length; i++){
    n.splice(i, 1)
    result.push(n.join(''))
    n = r.slice() 
  }
  result.sort((a,b) => {return a-b})
  return Number(result[result.length-1])
}
console.log(deleteDigit(152))
module.exports = {
  deleteDigit
};
