import type { xorCipherProps } from '../constants';

export const xorCipher = ({ messageInput, key }: xorCipherProps) => {
  if (messageInput === undefined) throw new Error('Message is undefined');
  if (typeof key !== 'string')
    throw new Error('The Key must Be String in XOR Cipher');

  let result: string = '';

  for (let i = 0; i < messageInput.length; i++) {
    result += messageInput.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    result += ' ';
  }

  return result;
};
