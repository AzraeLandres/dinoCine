import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Poster from "../components/atoms/Poster";
import ScreenWrapper from "../components/layout/screenWrapper";
import { supabase, user } from "../lib/supabase";

type UserContentItem = {
  id: number;
  favorite: boolean;
  watched: boolean;
  content: {
    id: number;
    tmdbId: number;
    posterPath: string;
  } | null;
};

export default function HomeScreen() {
  const [items, setItems] = useState<UserContentItem[]>([]);
  const [favorites, setFavorites] = useState<UserContentItem[]>([]);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("userContent")
        .select(
          `
    id,
    favorite,
    watched,
    content:contentId (
      id,
      tmdbId,
      posterPath
    )
  `
        )
        .eq("userId", user?.id)
        .eq("watched", true)
        .eq("favorite", true);

      if (error) {
        console.error(error);
      } else {
        setFavorites(
          (data ?? []).map((favorites) => ({
            ...favorites,
            content: Array.isArray(favorites.content)
              ? favorites.content[0]
              : favorites.content,
          }))
        );

        // console.log("Fetched items:", data);
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("userContent")
        .select(
          `
    id,
    favorite,
    watched,
    content:contentId (
      id,
      tmdbId,
      posterPath
    )
  `
        )
        .eq("userId", user?.id)
        .eq("watched", false);

      if (error) {
        console.error(error);
      } else {
        setItems(
          (data ?? []).map((item) => ({
            ...item,
            content: Array.isArray(item.content)
              ? item.content[0]
              : item.content,
          }))
        );

        // console.log("Fetched items:", data);
      }
    };

    fetchData();
  }, [user]);
  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          gap: 10,
          backgroundColor: "#A2CC9C",
          paddingHorizontal: 20,
          paddingVertical: 25,
          borderRadius: 25,
          marginBottom: 30,
        }}
      >
        <Text style={styles.title}>Besoin d'inspiration ?</Text>

        <Pressable
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: "#4A7D52",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Choisis pour moi !
          </Text>
        </Pressable>
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "Frogie-Regular",
            fontSize: 24,
            marginTop: 25,
            marginBottom: 15,
            color: "#4A7D52",
          }}
        >
          Recemment ajoutés
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            justifyContent: "space-evenly",
          }}
        >
          {items
            .slice(0, 3)
            .map(({ id, content }) =>
              content?.posterPath ? (
                <Poster key={id} path={content.posterPath} />
              ) : null
            )}
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "Frogie-Regular",
            fontSize: 24,
            marginTop: 25,
            marginBottom: 15,
            color: "#4A7D52",
          }}
        >
          Medias favoris
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            justifyContent: "space-evenly",
          }}
        >
          {favorites
            .slice(0, 3)
            .map(({ id, content }) =>
              content?.posterPath ? (
                <Poster key={id} path={content.posterPath} />
              ) : null
            )}
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,

    color: "white",
    letterSpacing: 1,
    fontFamily: "Frogie-Regular",
  },
});
