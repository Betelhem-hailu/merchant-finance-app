import AccountIcon from "@/assets/icons/account.svg";
import CategoryIcon from "@/assets/icons/category.svg";
import DashboardIcon from "@/assets/icons/dashboard.svg";
import ReportIcon from "@/assets/icons/report.svg";
import TransactionIcon from "@/assets/icons/transaction.svg";
import AppText from "@/components/ui/AppText";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
const insets = useSafeAreaInsets();
 return (
  <Tabs
   screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: "#CD1E35",
    tabBarInactiveTintColor: "#6B7280",
    tabBarStyle: {
  height: 60 + insets.bottom,
  paddingBottom: insets.bottom,
  paddingTop: 5,
  borderTopWidth: 0,
  boxShadow: "5px 1px 10px rgba(43, 42, 42, 0.1)",
 },
   }}
  >
   <Tabs.Screen
    name="index"
    options={{

      tabBarLabel: ({ focused, color }) => (
      <AppText
        style={{
          fontSize: focused ? 12 : 10,
          color,
          marginBottom: 4,
        }}
      >
        Dashboard
      </AppText>
    ),

      tabBarIcon: ({ color, focused }) => (
        <View
          style={{
            marginTop: focused ? -10 : 0,
          }}
        >
          <DashboardIcon
            width={focused ? 40 : 24}
            height={focused ? 40 : 24}
            color={color}
          />
        </View>
      ),
    }}
  />

   <Tabs.Screen
    name="transaction"
    options={{
     tabBarLabel: ({ focused, color }) => (
      <AppText
        style={{
          fontSize: focused ? 12 : 10,
          color,
          marginBottom: 4,
        }}
      >
        Transaction
      </AppText>
    ),

      tabBarIcon: ({ color, focused }) => (
        <View
          style={{
            marginTop: focused ? -10 : 0,
          }}>
      <TransactionIcon
       width={focused ? 34 : 24}
       height={focused ? 34 : 24}
       color={color}
      />
      </View>
     ),
    }}
   />

   <Tabs.Screen
    name="account"
    options={{
     tabBarLabel: ({ focused, color }) => (
      <AppText
        style={{
          fontSize: focused ? 12 : 10,
          color,
          marginBottom: 4,
        }}
      >
        Accounts
      </AppText>
    ),
      tabBarIcon: ({ color, focused }) => (
        <View
          style={{
            marginTop: focused ? -10 : 0,
          }}>
      <AccountIcon
       width={focused ? 34 : 24}
       height={focused ? 34 : 24}
       color={color}
      />
      </View>
     ),
    }}
   />

   <Tabs.Screen
    name="reports"
    options={{
     tabBarLabel: ({ focused, color }) => (
      <AppText
        style={{
          fontSize: focused ? 12 : 10,
          color,
          marginBottom: 4,
        }}
      >
        Reports
      </AppText>
    ),

      tabBarIcon: ({ color, focused }) => (
        <View
          style={{
            marginTop: focused ? -10 : 0,
          }}>
      <ReportIcon
       width={focused ? 34 : 24}
       height={focused ? 34 : 24}
       color={color}
      />
      </View>
     ),
    }}
   />

   <Tabs.Screen
    name="category"
    options={{
     tabBarLabel: ({ focused, color }) => (
      <AppText
        style={{
          fontSize: focused ? 12 : 10,
          color,
          marginBottom: 4,
        }}
      >
        Categories
      </AppText>
    ),

      tabBarIcon: ({ color, focused }) => (
        <View
          style={{
            marginTop: focused ? -10 : 0,
          }}>
        <CategoryIcon
        width={focused ? 34 : 24}
        height={focused ? 34 : 24}
        color={color}
        />
        </View>
     ),
    }}
   />
  </Tabs>
 );
}

const styles = {
  tabBar: {
    paddingTop: 10,
  }
}