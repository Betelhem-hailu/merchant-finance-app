import AppCard from "@/components/ui/AppCard";
import AppText from "@/components/ui/AppText";
import ExpesnseIcon from "@/assets/icons/expense.svg";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, View, StyleSheet, Pressable, FlatList } from "react-native";
import { useState } from "react";

export default function DashboardScreen() {
  const [menus, setMenus] = useState([
    { id: 1, title: "Today’s Balance", balance: "60,000 ETB", type: "total"},
    { id: 2, title: "Income Today", balance: "20,000 ETB",  type: "income"},
    { id: 3, title: "Expenses Today", balance: "5,000 ETB", type: "expense" },
   ]);
  return (
    <ScrollView style={{ padding: 20 }}>
       <AppText variant="title" style={{ alignSelf: "center", margin: 20 }}>
          Dashboard
       </AppText>

      <FlatList
          style={{ marginTop: 5, padding: 20 }}
          data={menus}
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (

            <AppCard style={{ margin: 5, borderRadius: 24 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
                <View style={{  width: "60%", flexDirection: "row", alignItems: "center", gap: 12}}>
                  <AppCard style={styles.circle}>
                    {item.type === "total" ? 
                    (<Ionicons
                      name="wallet"
                      size={24}
                      color="#CD1E35"
                    /> ): (item.type === "income" ? (
<MaterialCommunityIcons
                      name="cash-multiple"
                      size={24}
                      color="#CD1E35"
                    />
                    ) : (
                    <ExpesnseIcon
                      width={24}
                      height={24}
                      color="#CD1E35"
                    />))}
                  </AppCard>
                  <View>
                    <AppText variant="regular">{item.title}</AppText>
                    <AppText variant="title" style={styles.balance}>
                      {item.balance}
                    </AppText>
                  </View>
               </View>
               <Pressable
                      onPress={() =>
                      {}
                      }
                    >
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
               </Pressable>
             </View>
           </AppCard>

            )}
         />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  circle: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 100,
    boxShadow: "1px 2px 8px rgba(0,0,0,0.15)",
  },

  // balanceRow: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },

  balance: {
    fontFamily: "Roboto_700Bold",
    fontSize: 12,
    marginRight: 10,
  },
});
