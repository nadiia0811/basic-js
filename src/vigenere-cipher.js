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
  constructor(direct = true) {
    this.direct = direct;
  }

  // Helper function to handle the Vigenère cipher shift
  static shiftLetter(letter, keyLetter, isEncrypting = true) {
    const charCodeLetter = letter.toUpperCase().charCodeAt(0);
    const charCodeKey = keyLetter.toUpperCase().charCodeAt(0);
    const shift = charCodeKey - 65; // 'A' is at charCode 65

    // If we're encrypting, shift forward. If we're decrypting, shift backward.
    let newCharCode = isEncrypting
      ? charCodeLetter + shift
      : charCodeLetter - shift;

    // Wrap around if the letter goes out of range (A-Z)
    if (newCharCode < 65) {
      newCharCode += 26; // Wrap to 'Z'
    } else if (newCharCode > 90) {
      newCharCode -= 26; // Wrap to 'A'
    }

    return String.fromCharCode(newCharCode);
  }

  // Encrypt method
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const messageArray = message.split('');
    const keyArray = key.split('');
    let keyIndex = 0;
    const result = [];

    for (let i = 0; i < messageArray.length; i++) {
      const char = messageArray[i];

      if (/[a-zA-Z]/.test(char)) {
        const keyLetter = keyArray[keyIndex % key.length];
        result.push(VigenereCipheringMachine.shiftLetter(char, keyLetter, true));
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }

  // Decrypt method
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const messageArray = message.split('');
    const keyArray = key.split('');
    let keyIndex = 0;
    const result = [];

    for (let i = 0; i < messageArray.length; i++) {
      const char = messageArray[i];

      if (/[a-zA-Z]/.test(char)) {
        const keyLetter = keyArray[keyIndex % key.length];
        result.push(VigenereCipheringMachine.shiftLetter(char, keyLetter, false));
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
