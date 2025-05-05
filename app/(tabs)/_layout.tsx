import CustomTabBarBackground from "@/src/components/atoms/customTabBarBackground";
import TabBarIcon from "@components/atoms/TabBarIcon";
import Header from "@components/molecules/Header";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#b3aee4",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          height: 130,
          elevation: 0,
        },
        tabBarIconStyle: {
          height: 145,
        },
        tabBarShowLabel: false,
        tabBarBackground: () => <CustomTabBarBackground />,

        header: () => <Header />,
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
  );
}
