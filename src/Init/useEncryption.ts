import { useEncryptionMehtods } from './useEncryptionMethods';
import { useDecryptionMethods } from './useDecryptionMethods';
import { AlgorithmTypes } from '../enums';

export const useEncryption = () => {
  const { caeserCipherEncryption, xorCipherEncryption } =
    useEncryptionMehtods();

  const { caeserCipherDecryption, xorCipherDecryption } =
    useDecryptionMethods();

  const encryption = (
    plainText: string | undefined,
    keyValue: any,
    currentAlgorithm: AlgorithmTypes = AlgorithmTypes.CEASER
  ) => {
    switch (currentAlgorithm) {
      case AlgorithmTypes.CEASER:
        if (typeof Number(keyValue) !== 'number')
          throw new Error('The Key must Be Number in Ceaser Cipher');
        return caeserCipherEncryption(plainText, Number(keyValue));

      case AlgorithmTypes.XOR:
        if (typeof keyValue !== 'string')
          throw new Error('The Key must Be String in XOR Algorithm');
        return xorCipherEncryption(plainText, keyValue);

      default:
        throw new Error('Invalid Input');
    }
    //return { caeserCipherDecryption, xorCipherDecryption };
  };

  const decryption = (
    cipherText: string | undefined,
    keyValue: any,
    currentAlgorithm: AlgorithmTypes = AlgorithmTypes.CEASER
  ) => {
    switch (currentAlgorithm) {
      case AlgorithmTypes.CEASER:
        if (typeof Number(keyValue) !== 'number')
          throw new Error('The Key must Be Number in Ceaser Cipher');
        return caeserCipherDecryption(cipherText, Number(keyValue));

      case AlgorithmTypes.XOR:
        if (typeof keyValue !== 'string')
          throw new Error('The Key must Be String in XOR Algorithm');
        return xorCipherDecryption(cipherText, keyValue);

      default:
        throw new Error('Invalid Input');
    }
  };

  return {
    encryption,
    decryption,
  };
};
