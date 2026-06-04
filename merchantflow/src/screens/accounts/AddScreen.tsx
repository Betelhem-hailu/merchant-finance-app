import AppButton from "@/components/ui/AppButton";
import AppContainer from "@/components/ui/AppContainer";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import { View } from "react-native";

export default function AddAccountScreen() {
    return (
        <View style={{ padding: 20 }}>
           <AppText variant="title">Add Account</AppText>
        <AppContainer>
           <View style={{ gap: 10, marginTop: 15, marginBottom: 20 }}>
            <AppText variant="regular">Amount</AppText>
            <AppInput placeholder="0.00" />
           </View>
           <View style={{ gap: 10, marginTop: 5, marginBottom: 20 }}>
            <AppText variant="regular">Account</AppText>
            <AppInput placeholder="main cash" />
           </View>
           <View style={{ gap: 10, marginTop: 5, marginBottom: 20 }}>
            <AppText variant="regular">Transaction Type</AppText>
            <AppInput placeholder="Debit" />
           </View>
           <View style={{ gap: 10, marginTop: 5, marginBottom: 20 }}>
            <AppText variant="regular">Category</AppText>
            <AppInput placeholder="sales" />
           </View>
           <View style={{ gap: 10, marginTop: 5, marginBottom: 40 }}>
            <AppText variant="regular">Description</AppText>
            <AppInput placeholder="sell item" />
           </View>
           <AppButton title="Save" onPress={() => {}} />
          </AppContainer>
          </View>
    )
}