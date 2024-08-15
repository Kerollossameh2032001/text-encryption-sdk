import { useEncryptionMehtods } from './useEncryptionMethods';
import { useDecryptionMethods } from './useDecryptionMethods';

export const useEncryption = () => {
  const { caeserCipherEncryption, xorCipherEncryption } =
    useEncryptionMehtods();

  const { caeserCipherDecryption, xorCipherDecryption } =
    useDecryptionMethods();

  return {
    caeserCipherEncryption,
    caeserCipherDecryption,
    xorCipherEncryption,
    xorCipherDecryption,
  };
};
