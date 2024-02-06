import { Image, Text, TouchableOpacity, View } from "react-native";
import images from "../../assets/images";
import styles from "../../assets/styles";

const login = () => {
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.info("Button Clicked")}
        >
          <Text style={styles.buttonColor}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default login;
