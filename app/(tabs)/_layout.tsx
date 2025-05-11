import Header from "@/src/components/molecules/Header";
import TabBarIcon from "@components/atoms/TabBarIcon";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#b3aee4",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            height: 90,
            backgroundColor: "#A2CC9C",
          },

          tabBarIconStyle: {
            height: 80,
          },

          header: () => <Header />,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="home-variant" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="content"
          options={{
            title: "Content",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="movie-open" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="addContent"
          options={{
            title: "Add Content",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="plus" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            title: "Wishlist",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="book-outline" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="cog" color={color} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
