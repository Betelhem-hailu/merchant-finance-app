import { Text, StyleSheet, TextProps } from "react-native";

type Variant = "main" | "title" | "regular" | "light";

type Props = TextProps & {
  children: React.ReactNode;
  variant?: Variant;
};

export default function AppText({
  children,
  variant = "regular",
  style,
  ...props
}: Props) {
  return (
    <Text
      style={[styles.base, styles[variant], style]}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: "Roboto_400Regular",
    color: "#111827",
  },

  main: {
    fontSize: 32,
    fontFamily: "Roboto_700Bold",
  },

  title: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    fontWeight: "600",
    marginBottom: 10,
  },

  regular: {
    fontSize: 14,
  },

  light: {
    fontSize: 12,
    opacity: 0.5,
  },
});