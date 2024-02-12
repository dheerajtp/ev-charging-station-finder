import { Tabs } from "expo-router";

const HomeLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
