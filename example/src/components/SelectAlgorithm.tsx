import { StyleSheet, View } from 'react-native';
import RadioButton from './RadioButton';
import { AlgorithmTypes } from '../enums';

interface SelectAlgorithmProps {
  currentAlgorithm: AlgorithmTypes | undefined;
  setCurrentAlgorithm: React.Dispatch<
    React.SetStateAction<AlgorithmTypes | undefined>
  >;
}
const SelectAlgorithm = ({
  currentAlgorithm,
  setCurrentAlgorithm,
}: SelectAlgorithmProps) => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <RadioButton
          isSelected={currentAlgorithm === AlgorithmTypes.CEASER}
          onPress={() => {
            setCurrentAlgorithm(AlgorithmTypes.CEASER);
          }}
          text="Ceaser Algorithm"
        />
        <RadioButton
          isSelected={currentAlgorithm === AlgorithmTypes.XOR}
          onPress={() => {
            setCurrentAlgorithm(AlgorithmTypes.XOR);
          }}
          text="XOR Algorithm"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: { flexDirection: 'row', justifyContent: 'space-between' },
});
export default SelectAlgorithm;
