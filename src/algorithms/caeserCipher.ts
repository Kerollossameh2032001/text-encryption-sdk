import { chars, type CaeserCipherPorps } from '../constants';

export const caeserCipher = ({
  plainText,
  setPlainText,
  setKey,
  keyProps,
  setCipherText,
}: CaeserCipherPorps) => {
  setPlainText(plainText);
  setKey(keyProps);

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

  //set CipherText
  setCipherText(cipherHandling.toUpperCase());
};
