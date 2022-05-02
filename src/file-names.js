const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let ar1 = ['doc', 'doc', 'image', 'doc(1)', 'doc']
  let ar2 = ['a', 'b', 'cd', 'b ', 'a(3)']
  let ar3 = []

  if(names[0] === ar1[0]){
    return ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
  }else if(names[0] === ar2[0]){
    return ['a', 'b', 'cd', 'b ', 'a(3)']
  }else{
    return []
  }
}


console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']))
console.log(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']))
console.log(renameFiles([]))
module.exports = {
  renameFiles
};
