import LogoIcon from "@atoms/LogoIcon";
import { StyleSheet, View } from "react-native";

const Header = () => (
  <View style={styles.container}>
    {/** View containg logo */}
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
    {/** Gives border radius to create illusion of an inverted radius*/}

    <View style={styles.inverseBorder} />

    {/** little patches to permit a stronger radius */}
    {["left", "right"].map((side) => (
      <View
        key={side}
        style={[styles.patch, side === "left" ? { left: 0 } : { right: 0 }]}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    height: 130,
    backgroundColor: "#b3aee4",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  logoContainer: {
    zIndex: 2,
    height: 130,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  inverseBorder: {
    backgroundColor: "white",
    height: 50,
    position: "absolute",
    left: 0,
    right: 0,
    top: 105,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 3,
  },
  patch: {
    backgroundColor: "#b3aee4",
    height: 20,
    width: 20,
    position: "absolute",

    top: 130,
  },
});

export default Header;
