import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, View } from "react-native";

export default function TabBarIcon({
  name,
  color,
  focused,
}: {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  focused: boolean;
}) {
  return (
    <View
      style={[
        styles.background,
        focused ? styles.backgroundFocused : styles.backgroundUnfocused,
      ]}
    >
      <MaterialCommunityIcons size={35} name={name} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: 80,
    height: 55,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundFocused: {
    backgroundColor: "#b3aee4",
  },
  backgroundUnfocused: {
    backgroundColor: "transparent",
  },
});
