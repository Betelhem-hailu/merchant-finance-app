import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NavBar() {
  return (
    <View>
      <Ionicons
        name="person-outline"
        size={24}
        color="#111827"
      />
    </View>
  );
}