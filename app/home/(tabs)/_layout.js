import { Tabs } from "expo-router";
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "../../../state/store";
import { ClerkProvider } from "@clerk/clerk-expo";

const TabLayout = () => {
  return (
    <Provider store={store}>
      <ClerkProvider
        publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <Tabs>
          <Tabs.Screen
            name="home"
            options={{
              headerTitle: "Home",
              tabBarLabel: "Home",
              headerShown: false,
              //   tabBarActiveTintColor
              tabBarIcon: ({ color, size }) => {
                return <FontAwesome name="home" size={size} color={color} />;
              },
            }}
          />
          <Tabs.Screen
            name="favourites"
            options={{
              headerTitle: "Favorites",
              tabBarLabel: "Favorites",
              //   tabBarActiveTintColor
              tabBarIcon: ({ color, size }) => {
                return <Fontisto name="favorite" size={size} color={color} />;
              },
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              headerTitle: "Profile",
              tabBarLabel: "Profile",
              //   tabBarActiveTintColor
              tabBarIcon: ({ size, color }) => {
                return <FontAwesome name="user" size={size} color={color} />;
              },
            }}
          />
        </Tabs>
      </ClerkProvider>
    </Provider>
  );
};

export default TabLayout;
