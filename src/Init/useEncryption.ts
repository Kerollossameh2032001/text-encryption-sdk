import { caeserDeryption } from '../algorithms';
import { caeserCipher } from './../algorithms/caeserCipher';
import { useInitializeEncryption } from './useInitializeEncryption';

export const useEncryption = () => {
  //initialize State
  const { cipherText, setCipherText, plainText, setPlainText, key, setKey } =
    useInitializeEncryption();

  // Encryption Method Implement

  //caeserCipherEncryption
  const caeserCipherEncryption = (plainTextProp: string, keyProps: number) =>
    caeserCipher({
      keyProps,
      plainText: plainTextProp,
      setCipherText,
      setKey,
      setPlainText,
    });

  // Decryption Methods
  // caeserCipherDecryption
  const caeserCipherDecryption = (cipherText: string, keyProps: number) =>
    caeserDeryption({
      cipherText,
      keyProps,
      setCipherText,
      setKey,
      setPlainText,
    });

  return {
    setPlainText,
    setCipherText,
    plainText,
    cipherText,
    key,
    setKey,
    caeserCipherEncryption,
    caeserCipherDecryption,
  };
};
