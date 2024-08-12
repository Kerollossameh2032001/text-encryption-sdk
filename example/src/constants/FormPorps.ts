export interface FormProps {
  setPlainText?: React.Dispatch<any> | undefined;
  setCipherText?: React.Dispatch<any> | undefined;
  setKeyValue?: React.Dispatch<any> | undefined;
  plainText: any;
  keyValue: any;
  cipherText: any;
  handleCurrentEvent: () => void;
  switchFlow: () => void;
}
