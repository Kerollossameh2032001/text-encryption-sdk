import { StyleSheet, View } from 'react-native';
import Title from './Title';
import ElevatedButton from './ElevatedButton';
import { HeaderTypes } from '../enums';
import TextField from './TextField';
import { useState } from 'react';

function EncryptionForm() {
  const [message, setMessage] = useState<string | undefined>();
  const [result, setResult] = useState<string | undefined>();

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
        setValue={setMessage}
        value={message}
      />
      <TextField
        label="Result Text"
        placeholder=""
        setValue={setResult}
        value={result}
      />
      <ElevatedButton onPress={() => {}} text="Encrypt" />

      <Title
        headerStyle={HeaderTypes.LABEL}
        text="OR"
        style={{ textAlign: 'center', paddingVertical: 15 }}
      />

      <ElevatedButton
        onPress={() => {}}
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
