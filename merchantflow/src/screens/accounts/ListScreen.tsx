import AppCard from "@/components/ui/AppCard";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Pressable, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import AppButton from "@/components/ui/AppButton";

export default function AccountsListScreen() {
  const [showBalance, setShowBalance] = useState(true);
  const [accounts, setAccounts] = useState([
  { id: 1, name: "Dashen Savings", accountNumber: "1000837834", balance: 12345.67, lastUsed: "12 Jan 2024", accountType: "Bank" },
  { id: 2, name: "Telebirr", accountNumber: "096538293", balance: 5000.00, lastUsed: "13 Jan 2024", accountType: "Mobile Money" },
  { id: 3, name: "Daily Cash", accountNumber: "1000837836", balance: 2500.50, lastUsed: "14 Jan 2024", accountType: "Cash" },
  { id: 4, name: "Awash Bank", accountNumber: "1000837837", balance: 3000.75, lastUsed: "15 Jan 2024", accountType: "Bank" },
 ]);
 return (
  <View style={{ padding: 20 }}>
   <AppText variant="title" style={{ alignSelf: "center", margin: 20 }}>
       Accounts
      </AppText>
      <AppCard>
        <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
        <View style={{  width: "60%"}}>
            <AppText variant="regular">All Balances</AppText>
            <View style={styles.balanceRow}>
        <AppText variant="title" style={styles.balance}>
          {showBalance
            ? "12,345.67 ETB"
            : "••••••••"}
        </AppText>

        <Pressable
          onPress={() =>
            setShowBalance(!showBalance)
          }
        >
          <Ionicons
            name={
              showBalance
                ? "eye-off"
                : "eye"
            }
            size={22}
            color="gray"
          />
        </Pressable>
      </View>
            <AppText variant="regular">Updated 2hrs ago</AppText>
          </View>
          <Image
          source={require("@/assets/images/chart.jpg")}
            style={{ width: 60, height: 60 }}
          />
          </View>
      </AppCard>
      <View style={{ width: "100%", alignItems: "flex-end", marginTop: 10 }}>
      <AppButton title="Create Account" style={{ padding: 10, paddingLeft: 20, paddingRight: 20, text: { fontSize: 12 }}} />
      </View>
      <FlatList
          style={{ marginTop: 20 }}
          data={accounts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
           <View
            style={{
             flexDirection: "row",
             justifyContent: "space-between",
             padding: 10,
             marginBottom: 10,
             borderBottomColor: "#ccc",
             borderBottomWidth: 1,
            }}
           >
                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "20%", alignItems: "center", justifyContent: "center" }}>
                        {item.accountType === "Bank" && (
                            <View style={{ alignItems: "center" }}>
                                <View style={{ position: "relative", backgroundColor: "#CD1E35", width: 50, height: 50, borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                                    <AntDesign
                                        name="bank"
                                        size={16}
                                        color="white"
                                        // style={{ position: "absolute", bottom: 0, right: 0 }}
                                    />
                                </View>
                                <AppText variant="regular" style={{ color: "#CD1E35", fontSize: 12, alignItems: "center"}}>{item.accountType}</AppText>
                          </View>
                        )}
                        {item.accountType === "Mobile Money" && (
                             <View style={{ alignItems: "center" }}>
                                <View style={{ position: "relative", backgroundColor: "#CD1E35", width: 50, height: 50, borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                                    
                        <Ionicons
                            name="wallet"
                            size={16}
                            color="white"
                            // style={{ position: "absolute", bottom: 0, right: 0 }}
                        />
                        </View>
                                <AppText variant="regular" style={{ color: "#CD1E35", fontSize: 12,  alignItems: "center"}}>{item.accountType}</AppText>
                          </View>
                        )}
                            {item.accountType === "Cash" && (
                                  <View style={{ alignItems: "center" }}>
                                <View style={{ position: "relative", backgroundColor: "#CD1E35", width: 50, height: 50, borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
                                  
                            <MaterialCommunityIcons
                            name="cash"
                            size={20}
                            color="white"
                            // style={{ position: "absolute", bottom: 0, right: 0 }}
                        />
                        </View>
                                <AppText variant="regular" style={{ color: "#CD1E35", fontSize: 12,  alignItems: "center"}}>{item.accountType}</AppText>
                          </View>
                        )}
                    </View>
                        <View style={{ marginLeft: 10, width: 150 }}>
                            <AppText>{item.name}</AppText>
                            <AppText variant="regular">{item.accountNumber}</AppText>
                            <AppText variant="light">{item.lastUsed}</AppText>
                        </View>
                </View>
                <View style={{alignItems: "flex-end", width: 100}}>
                    <AppText>{item.balance} ETB</AppText>
                    <View style={{ width: "40%"}}>
                        <AppButton title="Edit" style={{ marginTop: 5 ,padding: 5, backgroundColor:"rgba(0,0,0,0.3)", borderRadius: 5 , text: { fontSize: 12 }}} />
                    </View>
                </View>
           </View>
          )}
         />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  balance: {
    fontFamily: "Roboto_700Bold",
    fontSize: 24,
    marginRight: 10,
  },
});
