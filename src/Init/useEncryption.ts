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

  return { setPlainText, plainText, cipherText, caeserCipherEncryption, key };
};
