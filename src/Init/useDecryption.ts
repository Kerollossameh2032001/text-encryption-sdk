import { caeserDeryption } from './../algorithms/caeserDecryption';
import { useInitializeEncryption } from './useInitializeEncryption';

export const useDecryption = () => {
  //initialize State
  const { cipherText, setCipherText, plainText, setPlainText, key, setKey } =
    useInitializeEncryption();

  // Decryption Method Implement

  //caeserCipherDecryption
  const caeserCipherDecryption = (cipherTextProps: string, keyProps: number) =>
    caeserDeryption({
      keyProps,
      cipherText: cipherTextProps,
      setCipherText,
      setKey,
      setPlainText,
    });

  return { setPlainText, plainText, cipherText, caeserCipherDecryption, key };
};
