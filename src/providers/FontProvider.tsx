import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { createContext, useContext, useEffect } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const FontContext = createContext({ fontsLoaded: false });

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [fontsLoaded] = useFonts({
    "Frogie-Regular": require("../../assets/fonts/Frogie-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded)
    return <View style={{ flex: 1, backgroundColor: "white" }} />;

  return (
    <FontContext.Provider value={{ fontsLoaded }}>
      {children}
    </FontContext.Provider>
  );
}

export const useFontContext = () => useContext(FontContext);
