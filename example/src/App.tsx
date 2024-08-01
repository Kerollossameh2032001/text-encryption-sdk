// import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// import { multiply } from 'react-native-text-encryption';
import EncryptionForm from './components/EncryptionForm';
import Title from './components/Title';
import { HeaderTypes } from './enums';

export default function App() {
  //const [result, setResult] = useState<number | undefined>();

  /* useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);
 */
  return (
    <View style={styles.templateContainer}>
      <Title headerStyle={HeaderTypes.HEADER} text="Encryptify" />
      <EncryptionForm />
    </View>
  );
}

const styles = StyleSheet.create({
  templateContainer: { flex: 1, padding: '5%' },
});
