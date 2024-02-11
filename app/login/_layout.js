import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import tokenCache from "../../utils/token";

const Layout = () => {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
      </Stack>
    </ClerkProvider>
  );
};

export default Layout;
