import { Tabs } from "expo-router";
import { FontAwesome, Fontisto } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home",
          tabBarLabel: "Home",
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
  );
};

export default TabLayout;
