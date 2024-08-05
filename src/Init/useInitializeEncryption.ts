import { useState } from 'react';

export const useInitializeEncryption = () => {
  const [cipherText, setCipherText] = useState<string>('');
  const [plainText, setPlainText] = useState<string>('');
  const [key, setKey] = useState<number>(0);

  return { cipherText, setCipherText, plainText, setPlainText, key, setKey };
};
