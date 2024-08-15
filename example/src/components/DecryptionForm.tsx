import { StyleSheet, View } from 'react-native';
import Title from './Title';
import ElevatedButton from './ElevatedButton';
import { HeaderTypes } from '../enums';
import TextField from './TextField';
import type { FormProps } from '../constants';
import SelectAlgorithm from './SelectAlgorithm';

function DecryptionForm({
  setKeyValue,
  keyValue,
  setCipherText,
  plainText,
  cipherText,
  handleCurrentEvent,
  switchFlow,
  currentAlgorithm,
  setCurrentAlgorithm,
}: FormProps) {
  return (
    <View style={styles.container}>
      <Title headerStyle={HeaderTypes.TITLE} text="Welcome to Encryptify" />
      <Title
        headerStyle={HeaderTypes.SUBHEADER}
        text="Enter Your message to Decrypt it ...!"
        style={{ paddingBottom: '5%' }}
      />
      <TextField
        label="Enter Message"
        placeholder="Enter Message"
        setValue={setCipherText}
        value={cipherText}
      />
      <TextField
        label="Key"
        placeholder="Enter The Key"
        value={keyValue}
        setValue={setKeyValue}
      />
      <SelectAlgorithm
        currentAlgorithm={currentAlgorithm}
        setCurrentAlgorithm={setCurrentAlgorithm}
      />
      <TextField
        label="Result Text"
        placeholder="Your Encrypted Message"
        value={plainText}
      />

      <ElevatedButton onPress={handleCurrentEvent} text="Decryption" />

      <Title
        headerStyle={HeaderTypes.LABEL}
        text="OR"
        style={styles.paragraphStyle}
      />

      <ElevatedButton
        onPress={switchFlow}
        text="Encryption"
        style={styles.secondaryBtnStyle}
        labelStyle={styles.secondaryLabelStyl}
      />
    </View>
  );
}

export default DecryptionForm;
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

  secondaryLabelStyl: { color: 'black' },

  paragraphStyle: { textAlign: 'center', paddingVertical: 15 },
});
