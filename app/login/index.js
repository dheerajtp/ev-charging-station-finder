import { Image, Text, TouchableOpacity, View } from "react-native";
import images from "../../assets/images";
import styles from "../../assets/styles";
import * as WebBrowser from "expo-web-browser";
import useWarmUpBrowser from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

const login = () => {
  useWarmUpBrowser();
  // const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  // const onPress = () =>
  //   React.useCallback(async () => {
  //     try {
  //       const { createdSessionId, signIn, signUp, setActive } =
  //         await startOAuthFlow();

  //       if (createdSessionId) {
  //         setActive({ session: createdSessionId });
  //       } else {
  //         // Use signIn or signUp for next steps such as MFA
  //       }
  //     } catch (err) {
  //       console.error("OAuth error", err);
  //     }
  //   }, []);

  const onPress = () => {
    console.warn("on press pressed");
  };
  return (
    <View style={[styles.container, styles.mtop]}>
      <Image source={images.logo} style={styles.loginLogo} />
      <Image source={images.ev} style={styles.loginMain} />
      <View style={styles.mtop}>
        <Text style={styles.heading}>
          Your Ultimate EV Charging Station Finder App
        </Text>
        <Text style={styles.content}>
          Find EV Charging Station Near You, Plan Trip And So Much More In Just
          One Click
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonColor}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default login;
