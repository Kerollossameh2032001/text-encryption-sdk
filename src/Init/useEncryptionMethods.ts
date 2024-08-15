import { caeserCipher, xorCipher } from '../algorithms';

export const useEncryptionMehtods = () => {
  //caeserCipherEncryption
  const caeserCipherEncryption = (
    plainTextProp: string | undefined,
    keyProps: any
  ) =>
    caeserCipher({
      keyProps,
      plainText: plainTextProp,
    });

  // XOR Cipher
  const xorCipherEncryption = (
    plainTextProps: string | undefined,
    keyProps: any
  ) =>
    xorCipher({
      messageInput: plainTextProps,
      key: keyProps,
    });

  return { caeserCipherEncryption, xorCipherEncryption };
};
