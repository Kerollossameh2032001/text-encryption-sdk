import { caeserDeryption, xorCipher } from '../algorithms';
import { xorDecryption } from '../algorithms/xorDecryption';
import { caeserCipher } from './../algorithms/caeserCipher';

export const useEncryption = () => {
  // Encryption Method Implement

  //caeserCipherEncryption
  const caeserCipherEncryption = (
    plainTextProp: string | undefined,
    keyProps: any
  ) =>
    caeserCipher({
      keyProps,
      plainText: plainTextProp,
    });

  const xorCipherEncryption = (
    plainTextProps: string | undefined,
    keyProps: any
  ) =>
    xorCipher({
      messageInput: plainTextProps,
      key: keyProps,
    });

  //Decryption Methods
  //caeserCipherDecryption
  const caeserCipherDecryption = (
    cipherText: string | undefined,
    keyProps: any
  ) =>
    caeserDeryption({
      cipherText,
      keyProps,
    });

  const xorCipherDecryption = (
    cipherText: string | undefined,
    keyProps: any
  ) => {
    return xorDecryption({
      messageInput: cipherText,
      key: keyProps,
    });
  };

  return {
    caeserCipherEncryption,
    caeserCipherDecryption,
    xorCipherEncryption,
    xorCipherDecryption,
  };
};
