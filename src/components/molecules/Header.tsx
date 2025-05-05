import LogoIcon from "@atoms/LogoIcon";
import { View } from "react-native";

const Header = () => (
  <View
    style={{
      zIndex: 10,
      height: 130,
      backgroundColor: "#b3aee4",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    }}
  >
    <View
      style={{
        zIndex: 2,
        height: 130,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
      }}
    >
      <LogoIcon />
    </View>
    <View
      style={{
        backgroundColor: "white",
        height: 50,
        position: "absolute",
        left: 0,
        right: 0,
        top: 105,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        zIndex: 3,
      }}
    />
    <View
      style={{
        backgroundColor: "#b3aee4",
        height: 20,
        width: 20,
        position: "absolute",
        left: 0,

        top: 130,
      }}
    />
    <View
      style={{
        backgroundColor: "#b3aee4",
        height: 20,
        width: 20,
        position: "absolute",

        right: 0,
        top: 130,
      }}
    />
  </View>
);

export default Header;
