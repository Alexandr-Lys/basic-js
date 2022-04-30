const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('')
  for(let i = 0; i < str.length ; i++){
    let q = str.filter(item => item === str[i]).length;
    if(str[i]===str[i+1]){
      console.log(str[i] + ' ' + str[i+1])
      str[i] = q + str[i]
      str.splice(i+1, q-1)
      i--
    }   
  }
  console.log(str)
  return str.join('')
  
}
console.log(encodeLine('abbcca'))
module.exports = {
  encodeLine
};
