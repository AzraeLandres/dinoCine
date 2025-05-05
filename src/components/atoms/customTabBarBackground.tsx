import { View } from "react-native";

export default function CustomTabBarBackground() {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: "#A2CC9C",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: 50,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 105,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          zIndex: 3,
        }}
      />
      <View
        style={{
          backgroundColor: "#A2CC9C",
          height: 20,
          width: 20,
          position: "absolute",
          left: 0,

          bottom: 130,
        }}
      />
      <View
        style={{
          backgroundColor: "#A2CC9C",
          height: 20,
          width: 20,
          position: "absolute",

          right: 0,
          bottom: 130,
        }}
      />
      <View
        style={{
          height: 130,
          zIndex: 2,
        }}
      ></View>
    </View>
  );
}
