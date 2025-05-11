import { Button, StyleSheet, Text } from "react-native";
import ScreenWrapper from "../components/layout/screenWrapper";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <Text style={styles.title}>
        Besoin d'inspiration ? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Rem iusto natus temporibus, impedit at aspernatur
        pariatur modi ab facere, inventore quis labore quae! Delectus esse,
        adipisci mollitia itaque quisquam odio! Besoin d'inspiration ? Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Rem iusto natus tem
        odio! Besoin d'inspiration ? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Rem iusto natus temporibus, impedit at aspernatur
        pariatur modi ab facere, inventore quis labore quae! Delectus esse,
        adipisci mollitia itaque quisquam odio! Besoin d'inspiration ? Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Rem iusto natus tem
        odio! Besoin d'inspiration ? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Rem iusto natus temporibus, impedit at aspernatur
        pariatur modi ab facere, inventore quis labore quae! Delectus esse,
        adipisci mollitia itaque quisquam odio! Besoin d'inspiration ? Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Rem iusto natus tem
        odio! Besoin d'inspiration ? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Rem iusto natus temporibus, impedit at aspernatur
        pariatur modi ab facere, inventore quis labore quae! Delectus esse,
        adipisci mollitia itaque quisquam odio! Besoin d'inspiration ? Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Rem iusto natus tem
        odio! Besoin d'inspiration ? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Rem iusto natus temporibus, impedit at aspernatur
        pariatur modi ab facere, inventore quis labore quae! Delectus esse,
        adipisci mollitia itaque quisquam odio! Besoin d'inspiration ? Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Rem iusto natus tem
        odio!
      </Text>
      <Button title="Choisis pour moi" />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
});
