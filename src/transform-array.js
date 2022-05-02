const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = []
  //return arr.indexOf('--discard-next')
  if(Array.isArray(arr)){
    // arr.forEach(e=> {
    //   result.push(e)
    // })
    for(let i = 0 ; i < arr.length ; i++){
      if(arr[i] === '--discard-next'){
        i++;
        result.push('')
        continue;
      }else if(arr[i] === '--double-next'){
        result.push(arr[i+1])
        continue;
      }else if(arr[i] === '--discard-prev'){
        if(arr[i-2]!=='--discard-next')
        result.splice(i-1, 1);
        continue;
      }else if(arr[i] === '--double-prev'){
        if(arr[i-2]!=='--discard-next'){
          if(i!==0){
            arr[i] = arr[i-1];}else{continue;}
        }else{
          continue;
        } 
      }
      result.push(arr[i])
    }
    return result.filter(e=>{return (e!=undefined&&e!='')})

  }else{
    throw new Error ('\'arr\' parameter must be an instance of the Array!')
  }
}
console.log(transform([
  "--double-prev",2,"--double-prev" ,"1","--double-prev","1"] ))
module.exports = {
  transform
};

// if(result[i] === '--discard-next'){
//   if(result[i] === '--discard-next' && i === 0){
//     result.splice(i, 1, '')
//     if(result.length <= 3)
//     result.push(result[result.length-1] + 1)
//   }else{
//     result.splice(i, 2, '')
//   }
// }else if(result[i] === '--discard-prev'){
//   if(result[i] === '--discard-prev' && i === 0){
//     result.splice(i, 1, '')
//     if(result.length <= 3)
//     result.push(result[result.length-1] + 1)
//   }else{
//     result.splice(i-1, 2, '')
//   }
// }else if(arr[i] === '--double-next'){
//   result.splice(i, 1 , result[i+1])
// }
// else if(arr[i] === '--double-prev'){
//   result.splice(i, 1 , result[i-1])
// }
// else{
//   result.push(arr[i])
// }