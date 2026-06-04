import { View } from "react-native";

export default function AppCard({ children, style }: { children: React.ReactNode,  style?: any }) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
    color: "#000001",
  },
};