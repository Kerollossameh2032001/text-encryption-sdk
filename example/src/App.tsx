import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import EncryptionForm from './components/EncryptionForm';
import Title from './components/Title';
import { HeaderTypes } from './enums';
import { useState } from 'react';
import { useEncryption } from 'react-native-text-encryption';
import DecryptionForm from './components/DecryptionForm';

export default function App() {
  const [isEncryptionflow, setIsEncryptionFlow] = useState<boolean>(true);
  const [plainText, setPlainText] = useState<string | undefined>();
  const [cipherText, setCipherText] = useState<string | undefined>();
  const [keyValue, setKeyValue] = useState<string | undefined>();

  const {
    //caeserCipherEncryption,
    //caeserCipherDecryption,
    xorCipherDecryption,
    xorCipherEncryption,
  } = useEncryption();

  const handleEncrypt = () => {
    //let result = caeserCipherEncryption(plainText, Number(key));
    let result = xorCipherEncryption(plainText, keyValue);
    console.log(result);

    setCipherText(result);
  };

  const handleDecrypt = () => {
    // let result = caeserCipherDecryption(cipherText, Number(keyValue));
    let result = xorCipherDecryption(cipherText, keyValue);
    setPlainText(result);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.templateContainer}>
          <Title
            headerStyle={HeaderTypes.HEADER}
            text={isEncryptionflow ? 'Encryption' : 'Decryption'}
          />
          {isEncryptionflow ? (
            <EncryptionForm
              switchFlow={() => {
                setCipherText('');
                setPlainText('');
                setKeyValue('0');
                setIsEncryptionFlow(false);
              }}
              handleCurrentEvent={() => handleEncrypt()}
              keyValue={keyValue}
              plainText={plainText}
              cipherText={cipherText}
              setKeyValue={setKeyValue}
              setPlainText={setPlainText}
            />
          ) : (
            <DecryptionForm
              switchFlow={() => {
                setIsEncryptionFlow(true);
                setCipherText('');
                setPlainText('');
                setKeyValue('0');
              }}
              handleCurrentEvent={() => handleDecrypt()}
              keyValue={keyValue}
              plainText={plainText}
              cipherText={cipherText}
              setKeyValue={setKeyValue}
              setCipherText={setCipherText}
            />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  templateContainer: { flex: 1, padding: '5%' },
});
