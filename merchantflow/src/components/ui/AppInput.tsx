import { TextInput, StyleSheet } from "react-native";

type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  style?: any;
};

export default function AppInput({ placeholder, value, onChangeText, secureTextEntry, style }: Props) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#9CA3AF"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={[styles.input, style]}
    />
  )
}

const styles =  StyleSheet.create({
  input: {
    borderWidth: 0,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 24,
    height: 46,
    padding: 10,
    boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
    elevation: 2,
  }
});