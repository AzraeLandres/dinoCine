import { supabase } from "@lib/supabase";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SessionContextProvider>
  );
}
