import AppCard from "@/components/ui/AppCard";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Image, Pressable, View, StyleSheet } from "react-native";

export default function TransactionsListScreen() {
 const [tasks, setTasks] = useState([
  { id: 1, title: "study react native", completed: false },
  { id: 2, title: "go gym", completed: false },
  { id: 3, title: "Finish assignment", completed: true },
  { id: 4, title: "Finish assignment", completed: true },
 ]);
 return (
  <View style={styles.container}>
   <AppText variant="title" style={{ alignSelf: "center", margin: 20 }}>
    Transactions
   </AppText>
   <View style={{ justifyContent: "flex-start", flexDirection: "row", alignItems: "center" }}>
    <AppInput style={{width: 250 }} placeholder="Search transactions" />
    <View style={{ marginLeft: 10 }}>
     <AppCard>
      <AppText>Filter by</AppText>
     </AppCard>
    </View>
   </View>
   <FlatList
    style={{ marginTop: 20 }}
    data={tasks}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
     <View
      style={{
       flexDirection: "row",
       justifyContent: "space-between",
       padding: 20,
       marginBottom: 10,
       borderBottomColor: "#ccc",
       borderBottomWidth: 1,
      }}
     >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
    //    source={{ uri: "" }}
       style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 1 }}
      />
      <View style={{ marginLeft: 30, width: 200 }}>
      <AppText>{item.title}</AppText>
      <AppText variant="light">12 Jan 2024</AppText>
      </View>
      </View>
      <View style={{alignItems: "flex-end", width: 100}}>
        <AppText>{item.title}</AppText>
      <AppText variant="light">12 Jan 2024</AppText>
      </View>
     </View>
    )}
   />
   <Pressable style={styles.fab}>
        <Ionicons
          name="add"
          size={32}
          color="white"
        />
      </Pressable>
  </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  fab: {
    position: "absolute",

    bottom: 30,
    right: 20,

    width: 64,
    height: 64,
    borderRadius: 32,

    backgroundColor: "#CD1E35",

    justifyContent: "center",
    alignItems: "center",

    boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",

    elevation: 8,
  },
});
