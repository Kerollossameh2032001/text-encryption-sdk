import { chars, type CaeserCipherPorps } from '../constants';

export const caeserCipher = ({ plainText, keyProps }: CaeserCipherPorps) => {
  if (plainText === undefined) throw new Error('PlainText is undefined');
  if (typeof keyProps !== 'number')
    throw new Error('The Key must Be Number in Ceaser Cipher');

  //handle Key , PlainText, get length of handled plan text
  const handleMessage = plainText.toLocaleLowerCase().replace(/ /g, '');
  const messageLen: number = handleMessage.length;

  //Ceaser Implementation
  let cipherHandling: string = '';
  for (var index = 0; index < messageLen; index++) {
    let position: number = chars.indexOf(handleMessage[index] ?? '') + keyProps;
    position = position % 26;
    cipherHandling += chars[position];
  }

  return cipherHandling.toUpperCase();
};
