const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type
    this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new NotImplementedError('Incorrect arguments!');
    } else {
      message = message.toUpperCase().split('');
      key = key.toUpperCase().split('');
      let result = '';
      let indexKey = [];
      let j = 0
      let messageIndex = 0;
      while (message.length != indexKey.length) {
        if (this.abc.indexOf(message[messageIndex]) === -1) {
          indexKey.push(' ');
          j--
        } else {
          indexKey.push(key[j]);
        }
        j++
        messageIndex++
        if (j === key.length) j = 0
      }
      for (let i = 0; i < message.length; i++) {
        if (this.abc.indexOf(message[i]) !== -1) {
          result += this.abc[this.abc.indexOf(message[i]) + this.abc.indexOf(indexKey[i])]
        } else {
          result += message[i]
        }
      }
      if(this.type === false){
        return result.split('').reverse().join('')
      }else{
        return result
      }
      
    }
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new NotImplementedError('Incorrect arguments!');
    } else {
      message = message.split('');
      key = key.toUpperCase().split('');
      let result = '';
      let indexKey = [];
      let j = 0
      let messageIndex = 0;
      while (message.length != indexKey.length) {
        if (this.abc.indexOf(message[messageIndex]) === -1) {
          indexKey.push(' ');
          j--
        } else {
          indexKey.push(key[j]);
        }
        j++
        messageIndex++
        if (j === key.length) j = 0
      }
      for (let i = 0; i < message.length; i++) {
        if (this.abc.indexOf(message[i]) !== -1) {
          console.log(this.abc.indexOf(indexKey[i]) - this.abc.indexOf(message[i] + 4))
          result += this.abc[this.abc.indexOf(message[i]) + 26 - this.abc.indexOf(indexKey[i])]
        } else {
          result += message[i]
        }
      }
      if(this.type === false){
        return result.split('').reverse().join('')
      }else{
        return result
      }
    }
  }
}
const directMachine = new VigenereCipheringMachine(false);
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))

module.exports = {
  VigenereCipheringMachine
};
