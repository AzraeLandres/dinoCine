import { View } from "react-native";

export default function CustomTabBarBackground() {
  return (
    <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
      <View
        style={{
          backgroundColor: "#fff",
          height: 50,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 85,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,

          zIndex: 3,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#A2CC9C",
          height: 110,
          zIndex: 2,
        }}
      ></View>
    </View>
  );
}
