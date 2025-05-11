import LogoIcon from "@atoms/LogoIcon";
import { StyleSheet, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.logoContainer}>
      <LogoIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    height: 90,
    paddingTop: 10,
    backgroundColor: "#b3aee4",

    justifyContent: "center",
    alignItems: "center",
  },
});
