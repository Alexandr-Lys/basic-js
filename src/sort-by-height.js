const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // if (arr.length == 0) return [];
  // let a = [],
  //   b = [],
  //   p = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] < p) a.push(arr[i]);
  //     else b.push(arr[i]);
  // }
  // return sortByHeight(a).concat(p, sortByHeight(b));
  let newArr = [];
  for (let i = 0 ; i < arr.length; i++){
    if(arr[i] == '-1'){
      arr.splice(i, 1);
      newArr.push(i);
      i--;
    }
  }
  arr.sort((a,b) => a-b);
  let j=0;
  for(let k=0; k < newArr.length; k++){
    arr.splice(newArr[k]+j,0,-1);
    j++
  }
  return arr
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))
module.exports = {
  sortByHeight
};
