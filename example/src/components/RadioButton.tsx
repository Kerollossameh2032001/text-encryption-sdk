import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Title from './Title';
import { HeaderTypes } from '../enums';

interface RadioButtonProps {
  isSelected: boolean;
  text: string;
  onPress: () => void;
}
const RadioButton = ({ onPress, text, isSelected }: RadioButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioBtnStyle}>
      <View
        style={[
          styles.radioCircleBtn,
          isSelected ? { backgroundColor: 'blue' } : {},
        ]}
      />
      <Title headerStyle={HeaderTypes.LABEL} text={text} />
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioBtnStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedStyle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    borderWidth: 2,
    marginHorizontal: 10,
    backgroundColor: 'blue',
  },

  radioCircleBtn: {
    width: 15,
    height: 15,
    borderRadius: 50,
    borderWidth: 2,
    marginHorizontal: 10,
  },
});
