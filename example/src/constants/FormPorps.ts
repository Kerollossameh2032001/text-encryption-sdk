export interface FormProps {
  setPlainText?: React.Dispatch<any> | undefined;
  setCipherText?: React.Dispatch<any> | undefined;
  plainText: any;
  setKey?: React.Dispatch<any> | undefined;
  key: number;
  cipherText: any;
  handleCurrentEvent: () => void;
  switchFlow: () => void;
}
