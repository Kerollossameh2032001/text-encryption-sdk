import { StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native';
import { HeaderTypes } from '../enums';

type TitleProps = {
  text: string;
  headerStyle: HeaderTypes;
  style?: StyleProp<TextStyle>;
};

function Title({ text, headerStyle, style }: TitleProps) {
  switch (headerStyle) {
    case HeaderTypes.HEADER:
      return <Text style={[styles.header, style]}>{text}</Text>;
    case HeaderTypes.TITLE:
      return <Text style={[styles.title, style]}>{text}</Text>;
    case HeaderTypes.LABEL:
      return <Text style={[styles.label, style]}>{text}</Text>;
    default:
      return <Text style={[styles.subTitle, style]}>{text}</Text>;
  }
}

export default Title;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
  },
  header: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
