import { StyleSheet, View } from "react-native";

export default function CustomTabBarBackground() {
  return (
    <View style={styles.container}>
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
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    height: 130,
    backgroundColor: "#A2CC9C",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navContainer: {
    zIndex: 2,
    height: 130,
  },
  inverseBorder: {
    backgroundColor: "white",
    height: 50,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 105,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    zIndex: 3,
  },
  patch: {
    backgroundColor: "#A2CC9C",
    height: 20,
    width: 20,
    position: "absolute",

    bottom: 130,
  },
});
