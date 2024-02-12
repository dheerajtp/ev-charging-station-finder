import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "../assets/styles";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Redirect } from "expo-router";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <StatusBar style="auto" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <SignedIn>
          {/* <Text>You are Signed in</Text> */}
          <Redirect href="/home" />
        </SignedIn>
        <SignedOut>
          <Redirect href="/login" />
        </SignedOut>
        <Text style={styles.text}>Index file</Text>
      </View>
    </ClerkProvider>
  );
};

export default App;
