import { chars, type CaeserDecryptionPorps } from '../constants';

export const caeserDeryption = ({
  cipherText,
  keyProps,
}: CaeserDecryptionPorps) => {
  if (cipherText === undefined) throw new Error('PlainText is undefined');
  if (typeof keyProps !== 'number')
    throw new Error('The Key must Be Number in Ceaser Cipher');

  const handleMessage = cipherText.toLocaleLowerCase().replace(/ /g, '');
  const messageLen: number = handleMessage.length;

  console.log(handleMessage);

  //Ceaser Implementation
  let plainTextHandling: string = '';
  for (var index = 0; index < messageLen; index++) {
    let position: number = chars.indexOf(handleMessage[index] ?? '') - keyProps;
    if (position < 0) position += 26;
    position = position % 26;
    plainTextHandling += chars[position];
  }

  //set CipherText
  return plainTextHandling.toUpperCase();
};
