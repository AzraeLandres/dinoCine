import TabBarIcon from "@components/atoms/TabBarIcon";
import { Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="book-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="content"
        options={{
          title: "Content",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="movie-open" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addContent"
        options={{
          title: "Add Content",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="plus-circle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="account" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
