import { View, StyleSheet } from "react-native";

type Props = {
  progress: number; // 0 - 100
  height?: number;
  color?: string;
};

export default function ProgressBar({
  progress,
  height = 10,
  color = "#CD1E35",
}: Props) {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <View
      style={[
        styles.track,
        {
          height,
          backgroundColor: `${color}20`, // faded version
        },
      ]}
    >
      <View
        style={[
          styles.fill,
          {
            width: `${safeProgress}%`,
            backgroundColor: color,
            height,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  fill: {
    borderRadius: 20,
  },
});