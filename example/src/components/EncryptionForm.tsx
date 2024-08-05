import { StyleSheet, View } from 'react-native';
import Title from './Title';
import ElevatedButton from './ElevatedButton';
import { HeaderTypes } from '../enums';
import TextField from './TextField';
import { useEncryption } from 'react-native-text-encryption';
import { useDecryption } from '../../../src/Init/useDecryption';

function EncryptionForm() {
  const { plainText, setPlainText, cipherText, caeserCipherEncryption } =
    useEncryption();

  const { caeserCipherDecryption } = useDecryption();

  const handleEncrypt = () => {
    caeserCipherEncryption(plainText, 3);
  };

  const handleDecrypt = () => {
    caeserCipherDecryption(plainText, 3);
  };
  return (
    <View style={styles.container}>
      <Title headerStyle={HeaderTypes.TITLE} text="Welcome to Encryptify" />
      <Title
        headerStyle={HeaderTypes.SUBHEADER}
        text="Enter Your message to Encrypt it ...!"
        style={{ paddingBottom: '5%' }}
      />
      <TextField
        label="Enter Message"
        placeholder="Enter Message"
        setValue={setPlainText}
        value={plainText}
      />
      <TextField label="Result Text" placeholder="" value={cipherText} />
      <ElevatedButton onPress={() => handleEncrypt()} text="Encrypt" />

      <Title
        headerStyle={HeaderTypes.LABEL}
        text="OR"
        style={{ textAlign: 'center', paddingVertical: 15 }}
      />

      <ElevatedButton
        onPress={() => handleDecrypt()}
        text="Decrypt"
        style={styles.secondaryBtnStyle}
        labelStyle={{ color: 'black' }}
      />
    </View>
  );
}

export default EncryptionForm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  secondaryBtnStyle: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
  },
});
