import AppButton from "@/components/ui/AppButton";
import AppContainer from "@/components/ui/AppContainer";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import { router } from "expo-router";
import { View } from "react-native";

export default function RegisterScreen() {
 return (
  <AppContainer style={{ marginTop: 100  }}>
   <AppText variant="title">Let's get started</AppText>
   <AppText variant="regular">Create your account</AppText>
   <View style={{ gap: 10, marginTop: 15, marginBottom: 20 }}>
    <AppText variant="regular">Name</AppText>
    <AppInput placeholder="Jon Doe" />
   </View>
   <View style={{ gap: 10, marginTop: 10, marginBottom: 20 }}>
    <AppText variant="regular">Email</AppText>
    <AppInput placeholder="jon.doe@example.com" />
   </View>
   <View style={{ gap: 10, marginTop: 10, marginBottom: 20 }}>
    <AppText variant="regular">Password</AppText>
    <AppInput placeholder="****" secureTextEntry />
   </View>
   <View style={{ gap: 10, marginTop: 10, marginBottom: 40 }}>
    <AppText variant="regular">Confirm Password</AppText>
    <AppInput placeholder="****" secureTextEntry />
   </View>
   <AppButton title="Sign up" onPress={() => {}} />
   <AppText variant="regular" style={{ marginTop: 5 }}>
    I don’t have account?{" "}
    <AppText
     variant="regular"
     style={{ color: "#CD1E35" }}
     onPress={() => {
    //   router.push("");
     }}
    >
     Sign in
    </AppText>
   </AppText>
  </AppContainer>
 );
}
