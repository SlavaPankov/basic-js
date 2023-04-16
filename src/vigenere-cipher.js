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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.square = this.generateSquare();
  }

  generateSquare() {
    const square = [];

    for (let i = 0; i < this.alphabet.length; i++) {
      square.push(this.alphabet.slice(i).concat(this.alphabet.slice(0, i)));
    }

    return square;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = "";
    for(let i = 0, j = 0; i < message.length; i++){
      let currentLetter = message[i];

      if (/[a-z]/i.test(currentLetter)){
        result += this.square[this.alphabet.indexOf(currentLetter.toUpperCase())][this.alphabet.indexOf(key[j % key.length].toUpperCase())];
        j++;
      } else {
        result += currentLetter;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      let currentLetter = message[i];

      const row = this.alphabet.indexOf(key[j % key.length].toUpperCase());
      const coll = this.square[row].indexOf(message[i].toUpperCase());

      if (/[a-z]/i.test(currentLetter)) {
        result += this.alphabet[coll];
        j++;
      } else {
        result += currentLetter;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
