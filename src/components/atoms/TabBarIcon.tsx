import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

export default function TabBarIcon({
  name,
  color,
  focused,
  isFab = false,
}: {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  focused: boolean;
  isFab?: boolean;
}) {
  if (isFab) {
    return (
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 32,
          backgroundColor: focused ? "#A7A4EB" : "#B3AEE4",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons size={35} name={name} color={color} />
      </View>
    );
  }

  return <MaterialCommunityIcons size={35} name={name} color={color} />;
}
