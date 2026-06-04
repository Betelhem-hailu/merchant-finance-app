import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  style?: any;
  onPress?: () => void;
};

export default function AppButton({
  title,
  onPress,
  style,
}: Props) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, style?.text]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#CD1E35",
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});