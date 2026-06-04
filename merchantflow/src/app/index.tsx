import { router } from "expo-router";
import { Button, View } from "react-native";

export default function HomeScreen() {
 return (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
   <Button
    title="Go to MainApp"
    onPress={() => {
     router.replace("/(tabs)" as any);
    }}
   />
  </View>
 );
}
