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
import { AlgorithmTypes, useEncryption } from 'react-native-text-encryption';
import DecryptionForm from './components/DecryptionForm';

export default function App() {
  const [isEncryptionflow, setIsEncryptionFlow] = useState<boolean>(true);
  const [plainText, setPlainText] = useState<string | undefined>();
  const [cipherText, setCipherText] = useState<string | undefined>();
  const [keyValue, setKeyValue] = useState<string | undefined>();
  const [currentAlgorithm, setCurrentAlgorithm] = useState<
    AlgorithmTypes | undefined
  >();

  const { encryption, decryption } = useEncryption();

  const handleEncrypt = () => {
    setCipherText(encryption(plainText, keyValue, currentAlgorithm));
  };

  const handleDecrypt = () => {
    setPlainText(decryption(cipherText, keyValue, currentAlgorithm));
  };

  return (
    <KeyboardAvoidingView style={styles.keyboardStyle} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
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
              currentAlgorithm={currentAlgorithm}
              setCurrentAlgorithm={setCurrentAlgorithm}
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
              currentAlgorithm={currentAlgorithm}
              setCurrentAlgorithm={setCurrentAlgorithm}
            />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  templateContainer: { flex: 1, padding: '5%' },
  keyboardStyle: { flex: 1 },
  scrollViewStyle: { flexGrow: 1 },
});
