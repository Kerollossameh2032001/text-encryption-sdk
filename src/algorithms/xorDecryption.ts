import type { xorCipherProps } from '../constants';

export const xorDecryption = ({ messageInput, key }: xorCipherProps) => {
  if (messageInput === undefined) throw new Error('Message is undefined');
  if (typeof key !== 'string')
    throw new Error('The Key must Be String in XOR Cipher');

  // Split the cipher text by space
  let cipherText: string[] = messageInput.trim().split(' ');
  let result: string = '';

  for (let i = 0; i < cipherText.length; i++) {
    // Convert each piece of cipher text to a number
    let cipherValue = parseInt(cipherText[i] ?? '');

    // XOR with the corresponding character in the key
    let letter: number = cipherValue ^ key.charCodeAt(i % key.length);

    // Convert back to a character and append to the result
    result += String.fromCharCode(letter);
  }

  return result;
};
