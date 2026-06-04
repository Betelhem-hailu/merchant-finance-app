import AppButton from "@/components/ui/AppButton";
import AppText from "@/components/ui/AppText";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";


export default function CategoriesListScreen() {
 const [selected, setSelected] = useState<"income" | "expense">("income");

 const handleSelect = (value: "income" | "expense") => {
  setSelected(value);
  // onChange?.(value);
 };
 const [categories, setCategories] = useState([
  {
   id: 1,
   image: "@/assets/images/category.png",
   name: "Groceries",
   entries: "20",
  },
  { id: 2, image: "@/assets/images/category.png", name: "Rent", entries: "15" },
  {
   id: 3,
   image: "@/assets/images/category.png",
   name: "Sales",
   entries: "25",
  },
 ]);
 return (
  <View style={styles.container}>
   <AppText variant="title" style={{ alignSelf: "center", margin: 20 }}>
    Categories
   </AppText>

   {/* toggle */}

   <View style={styles.containerToggle}>
  
    <View style={styles.wrapper}>
     {/* Animated background indicator */}
     
     <View
      style={[
       styles.indicator,
       selected === "income" ? styles.left : styles.right,
      ]}
     />

     <Pressable style={styles.item} onPress={() => handleSelect("income")}>
      <AppText
       style={[styles.text, selected === "income" && styles.activeText]}
      >
       Income
      </AppText>
     </Pressable>

     <Pressable style={styles.item} onPress={() => handleSelect("expense")}>
      <AppText
       style={[styles.text, selected === "expense" && styles.activeText]}
      >
       Expense
      </AppText>
     </Pressable>
    </View>
   </View>


   {/* List of categories */}
   <AppText variant="title" style={{ fontSize: 16 }}>
    Manage Categories
   </AppText>
   <View
    style={{
     backgroundColor: "#ccc",
     height: 1,
    }}
   />
   {/* The Income */}
   <FlatList
    style={{ marginTop: 10 }}
    data={categories}
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
       <Image
        source={require("@/assets/images/category.png")}
        style={{ width: 50, height: 50, borderRadius: 100 }}
       />
       <View style={{ marginLeft: 30, width: "50%" }}>
        <AppText>{item.name}</AppText>
        <AppText variant="light">{item.entries}</AppText>
       </View>
      </View>
      <View style={{ alignItems: "flex-end", width: 100 }}>
       <View
        style={{
         flexDirection: "row",
         alignItems: "flex-end",
         justifyContent: "flex-end",
         gap: 10,
        }}
       >
        <AppButton
         title="Edit"
         style={{
          width: "50%",
          marginTop: 5,
          padding: 5,
          backgroundColor: "rgba(0,255,68,0.3)",
          borderRadius: 5,
          text: { fontSize: 12, color: "#00FF44" },
         }}
        />
        <AppButton
         title="Delete"
         style={{
          width: "50%",
          marginTop: 5,
          padding: 5,
          backgroundColor: "rgba(205,30,53,0.3)",
          borderRadius: 5,
          text: { fontSize: 12, color: "#CD1E35" },
         }}
        />
       </View>
      </View>
     </View>
    )}
   />
   {/* The Expense */}
   <Pressable style={styles.fab}>
    <Ionicons name="add" size={32} color="white" />
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

 containerToggle: {
  alignItems: "center",
  margin: 20,
 },

 wrapper: {
  flexDirection: "row",
  backgroundColor: "#FFFFFF",
  borderRadius: 30,
  padding: 5,
  width: 220,
  position: "relative",
  boxShadow: "inset -3px -3px 10px rgba(0,0,0,0.25), inset 3px 3px 10px rgba(255,255,255,0.7)",
  elevation: 4,
 },

 indicator: {
  position: "absolute",
  top: 5,
  bottom: 5,
  width: "50%",
  backgroundColor: "#CD1E35",
  borderRadius: 25,
 },

 left: {
  left: 5,
 },

 right: {
  right: 5,
 },

 item: {
  flex: 1,
  alignItems: "center",
  paddingVertical: 8,
  zIndex: 1,
 },

 text: {
  color: "#111827",
  fontWeight: "500",
 },

 activeText: {
  color: "#fff",
  fontWeight: "600",
 },
});
