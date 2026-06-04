import AppButton from "@/components/ui/AppButton";
import AppCard from "@/components/ui/AppCard";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import DateRangePicker from "@/components/ui/DateRangePicker";
import ProgressBar from "@/components/ui/ProgressBar";
import { Button } from "expo-router/build/react-navigation";
import { useState } from "react";
import { FlatList, Image, View } from "react-native";

export default function ReportsScreen() {
 const [categories, setCategories] = useState([
  { id: 1, name: "Groceries", percent: "88"},
  { id: 2, name: "Retail", percent: "10" },
  { id: 3, name: "Services", percent: "2" },
 ]);
 return (
  <View style={{ padding: 20 }}>
   <AppText variant="title" style={{ alignSelf: "center", margin: 20 }}>
       Reports
      </AppText>
      <View style={{justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
       <DateRangePicker />
       <View style={{ marginLeft: 10, justifyContent: "flex-start", gap: 10, flexDirection: "row", }}>
        <AppButton title="Today" style={styles.Button}  />
        <AppButton title="Weekly" style={styles.Button} />
       </View>
       </View>

 <AppCard style={{ marginTop: 20 }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <AppText variant="regular">Cash Flow</AppText>
                <AppText variant="title" style={styles.balance}>+ 12,345.67 ETB </AppText>
            </View>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 50 }}>
             <Image
          source={require("@/assets/images/chart.jpg")}
            style={{ width: 60, height: 60 }}
          />
          <View>
                      <AppText variant="regular">Net inflow</AppText>
                      <AppText variant="light">23 Transactions</AppText>
            </View>
            
          </View>
         
      </AppCard>

      {/* The category summary */}
      <AppCard style={{ marginTop: 20 }}>
       <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <AppText variant="regular">Category Breakdown</AppText>
                <AppText variant="title" style={{fontFamily: "Roboto_700Bold"}}>Total 34</AppText>
        </View>
        <FlatList
         data={categories}
         keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", marginTop: 5, gap: 20 }}>
                    
                    <AppText variant="regular" style={{ width: "20%"}}>{item.name}</AppText>
                    <View style={{ width: "60%"}}>  
                    
                    <ProgressBar progress={parseInt(item.percent)} />
                    </View>
                    <AppText variant="regular">{item.percent}%</AppText>
                </View>
            )}
        />
       </AppCard>
       <View style={{ width: "100%", alignItems: "flex-end", marginTop: 10 }}>
             <AppButton title="Export" style={{ padding: 10, paddingLeft: 20, paddingRight: 20, text: { fontSize: 12 }}} />
             </View>
  </View>
 );
}

const styles = {
  Button: {
   padding: 10, 
   backgroundColor:"rgba(0,0,0,0.1)",
   boxShadow: "0px 2px 8px rgba(0,0,0,0.05)", 
   borderRadius: 10 , 
   text: { fontSize: 12, color: "#000" }
  },
  balance: {
    fontFamily: "Roboto_700Bold",
    fontSize: 24,
    marginRight: 10,
  },
};
