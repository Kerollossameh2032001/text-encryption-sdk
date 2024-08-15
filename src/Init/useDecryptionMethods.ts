import { caeserDeryption } from '../algorithms';
import { xorDecryption } from '../algorithms/xorDecryption';

export const useDecryptionMethods = () => {
  //caeser Cipher Decryption
  const caeserCipherDecryption = (
    cipherText: string | undefined,
    keyProps: any
  ) =>
    caeserDeryption({
      cipherText,
      keyProps,
    });

  //XOR Cipher Decryption
  const xorCipherDecryption = (
    cipherText: string | undefined,
    keyProps: any
  ) => {
    return xorDecryption({
      messageInput: cipherText,
      key: keyProps,
    });
  };

  return { caeserCipherDecryption, xorCipherDecryption };
};
