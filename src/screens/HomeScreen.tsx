import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ color: "#000", fontSize: 24 }}>
        Bienvenue sur DinoCine 🎬
      </Text>
    </View>
  );
}
