import { StyleSheet, View } from 'react-native';
import Title from './Title';
// import TextField from './TextField';
import ElevatedButton from './ElevatedButton';
import { HeaderTypes } from '../enums';
//import { useState } from 'react';

function EncryptionForm() {
  //const [value, setValue] = useState<string | undefined>();
  return (
    <View style={styles.container}>
      <Title headerStyle={HeaderTypes.TITLE} text="Welcome to Encryptify" />
      <Title
        headerStyle={HeaderTypes.SUBHEADER}
        text="Enter Your message to Encrypt it ...!"
      />
      {/* <TextField
        label="Enter Message"
        placeholder="Enter Massage"
        setValue={setValue}
        value={value}
      />
      <TextField
        label="Result Text"
        placeholder=""
        setValue={setValue}
        value={value}
      /> */}
      <ElevatedButton onPress={() => {}} text="Encrypt" />

      <Title
        headerStyle={HeaderTypes.LABEL}
        text="OR"
        style={{ textAlign: 'center', paddingVertical: 15 }}
      />

      <ElevatedButton
        onPress={() => {}}
        text="Decrypt"
        style={{
          backgroundColor: 'white',
          borderColor: 'black',
          borderWidth: 2,
        }}
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
});
