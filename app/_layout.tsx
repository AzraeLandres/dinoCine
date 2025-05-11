import { FontProvider } from "@/src/providers/FontProvider";
import { supabase } from "@lib/supabase";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Stack } from "expo-router";
import "nativewind";
import { View } from "react-native";
export default function RootLayout() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <FontProvider>
        <View style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </View>
      </FontProvider>
    </SessionContextProvider>
  );
}
