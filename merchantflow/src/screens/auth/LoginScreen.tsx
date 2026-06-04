import AppButton from "@/components/ui/AppButton";
import AppContainer from "@/components/ui/AppContainer";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import { router } from "expo-router";
import { View } from "react-native";

export default function LoginScreen() {
  return (
    <AppContainer style={{ marginTop: 150 }}>
        <AppText variant="title">Welcome back</AppText>
        <AppText variant="regular">Sign in to continue to your account</AppText>
        <View style={{gap: 10, marginTop: 20, marginBottom: 20}}>
        <AppText variant="regular">Email</AppText>
        <AppInput placeholder="jon.doe@example.com" />
        </View>
        <View style={{gap: 10, marginTop: 10, marginBottom: 40 }}>
        <AppText variant="regular">Password</AppText>
        <AppInput placeholder="****" secureTextEntry />
        <AppText
             variant="regular"
             style={{ color: "#CD1E35", textAlign: "right", marginTop: 5 }}
             onPress={() => {
              // router.push("/../screens/auth/login");
             }}
            >
             forgot password?
            </AppText>
        </View>
        <AppButton title="Sign in" onPress={() => {}} />
        <AppText variant="regular" style={{marginTop: 5}}>Already have account? <AppText variant="regular" style={{color: "#CD1E35"}}>Sign up</AppText></AppText>
          
    </AppContainer>
  )
}