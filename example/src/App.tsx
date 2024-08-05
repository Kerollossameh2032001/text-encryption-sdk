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
  const {
    plainText,
    setPlainText,
    cipherText,
    setCipherText,
    key,
    setKey,
    caeserCipherEncryption,
    caeserCipherDecryption,
  } = useEncryption();

  const handleEncrypt = () => {
    caeserCipherEncryption(plainText, Number(key));
  };

  const handleDecrypt = () => {
    caeserCipherDecryption(cipherText, Number(key));
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
              switchFlow={() => setIsEncryptionFlow(false)}
              handleCurrentEvent={() => handleEncrypt()}
              key={key}
              plainText={plainText}
              cipherText={cipherText}
              setKey={setKey}
              setPlainText={setPlainText}
            />
          ) : (
            <DecryptionForm
              switchFlow={() => {
                setIsEncryptionFlow(true);
                setCipherText('');
                setPlainText('');
                setKey(0);
              }}
              handleCurrentEvent={() => handleDecrypt()}
              key={key}
              plainText={plainText}
              cipherText={cipherText}
              setKey={setKey}
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
