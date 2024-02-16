import { Image, Text, View } from "react-native";
import images from "../../assets/images";
import styles from "../../assets/styles";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  const { user } = useUser();
  return (
    <View style={styles.headerContent}>
      <Image source={{ uri: user?.imageUrl }} style={styles.userLogo} />
      <Image source={images.logo} style={styles.loginLogo} />
      <FontAwesome name="filter" size={24} color="black" />
    </View>
  );
};

export default Header;
