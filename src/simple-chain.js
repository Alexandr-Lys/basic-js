const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: [],
  getLength() {
    return this.str.length
  },
  addLink(value) {
      if(value!=undefined || value === null){
        this.str.push(`( ${value} )`)
      }else{
        this.str.push('( )')
      }
      return this
  },
  removeLink(position) {
    position -= 1
    if(!position || this.str.length >= position || position < this.str.length || !Number.isInteger(position)){
      throw new Error('You can\'t remove incorrect link!');
    }
    this.str.splice(position, 1)
    return this
  },
  reverseChain() {
    this.str.reverse()
    return this
  },
  finishChain() {
    console.log(this.str)
    return this.str.join('~~')
  }
};
console.log(null === undefined)
console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
module.exports = {
  chainMaker
};
