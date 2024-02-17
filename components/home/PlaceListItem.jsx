import { Image, Text, View } from "react-native";
import images from "../../assets/images";
import styles from "../../assets/styles";

const PlaceListItem = ({ item }) => {
  return (
    <View style={styles.placeItem}>
      <Image source={images.ev} style={styles.evImage} />
      <View style={styles.placeTextView}>
        <Text>{item?.displayName?.text}</Text>
        <Text>{item?.shortFormattedAddress}</Text>
      </View>
    </View>
  );
};

export default PlaceListItem;
