import { chars, type CaeserDecryptionPorps } from '../constants';

export const caeserDeryption = ({
  cipherText,
  setPlainText,
  setKey,
  keyProps,
  setCipherText,
}: CaeserDecryptionPorps) => {
  setCipherText(cipherText);
  setKey(keyProps);

  const handleMessage = cipherText.toLocaleLowerCase().replace(/ /g, '');
  const messageLen: number = handleMessage.length;

  //Ceaser Implementation
  let plainTextHandling: string = '';
  for (var index = 0; index < messageLen; index++) {
    let position: number = chars.indexOf(handleMessage[index] ?? '') - keyProps;
    position = position % 26;
    plainTextHandling += chars[position];
  }

  //set CipherText
  setPlainText(plainTextHandling.toUpperCase());
};
