export interface CaeserCipherPorps {
  plainText: string;
  keyProps: number;
  setPlainText: React.Dispatch<React.SetStateAction<string>>;
  setKey: React.Dispatch<React.SetStateAction<number>>;
  setCipherText: React.Dispatch<React.SetStateAction<string | undefined>>;
}
