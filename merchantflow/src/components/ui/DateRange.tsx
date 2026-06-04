import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

type Props = {
  startDate?: string;
  endDate?: string;
  onPress?: () => void;
};

export default function DateRangeInput({
  startDate,
  endDate,
  onPress,
}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>
        {startDate && endDate
          ? `${startDate} → ${endDate}`
          : "Select date range"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 24,
    height: 46,
    justifyContent: "center",
    paddingHorizontal: 14,

    // shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },

    // Android
    elevation: 2,
  },
  text: {
    color: "#111827",
  },
});