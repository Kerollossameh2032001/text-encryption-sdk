import { StyleSheet, TextInput, View } from 'react-native';
import Title from './Title';
import { HeaderTypes } from '../enums';

type TextFieldProps = {
  label: string;
  placeholder: string;
  value: any;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
};

function TextField({ label, placeholder, setValue, value }: TextFieldProps) {
  return (
    <View style={styles.componentLayout}>
      <Title headerStyle={HeaderTypes.LABEL} text={label} />
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
        />
      </View>
    </View>
  );
}

export default TextField;

const styles = StyleSheet.create({
  componentLayout: {
    marginVertical: '3%',
  },
  textInputStyle: {
    fontSize: 18,
    color: 'black',
  },
  textInputContainer: {
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 2,
    paddingHorizontal: '5%',
    marginVertical: '3%',
  },
});
