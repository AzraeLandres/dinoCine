import { ScrollView, StyleSheet, View } from "react-native";

export default function ScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <ScrollView style={styles.scrollView}>{children}</ScrollView>

      <View style={styles.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 30,
    zIndex: 2,
    padding: 20,
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
  },
  top: {
    height: 50,
    zIndex: 1,
    backgroundColor: "#b3aee4",
  },
  bottom: {
    height: 50,
    zIndex: 1,
    backgroundColor: "#A2CC9C",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
});
