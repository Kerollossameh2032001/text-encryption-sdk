import {
  StyleSheet,
  TouchableOpacity,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import Title from './Title';
import { HeaderTypes } from '../enums';

type ElevatedButtonPorps = {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

const ElevatedButton = ({
  text,
  onPress,
  style,
  labelStyle,
}: ElevatedButtonPorps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnStyle, style]}>
      <Title
        style={[styles.btnLabelStyle, labelStyle]}
        headerStyle={HeaderTypes.LABEL}
        text={text}
      />
    </TouchableOpacity>
  );
};

export default ElevatedButton;
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 25,
  },
  btnLabelStyle: { color: 'white', fontSize: 18, textAlign: 'center' },
});
