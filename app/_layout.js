import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router/stack";

import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_300Light_Italic,
  Rubik_400Regular_Italic,
  Rubik_500Medium_Italic,
  Rubik_600SemiBold,
  Rubik_600SemiBold_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
  Rubik_800ExtraBold,
  Rubik_800ExtraBold_Italic,
  Rubik_900Black,
  Rubik_900Black_Italic,
} from "@expo-google-fonts/rubik";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_300Light_Italic,
    Rubik_400Regular_Italic,
    Rubik_500Medium_Italic,
    Rubik_600SemiBold,
    Rubik_600SemiBold_Italic,
    Rubik_700Bold,
    Rubik_700Bold_Italic,
    Rubik_800ExtraBold,
    Rubik_800ExtraBold_Italic,
    Rubik_900Black,
    Rubik_900Black_Italic,
  });

  const hideSpashScreen = async () => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    hideSpashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
