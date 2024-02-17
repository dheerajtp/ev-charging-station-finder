import { Image } from "react-native";
import { Marker } from "react-native-maps";
import images from "../../assets/images";
import styles from "../../assets/styles";

const Markers = ({ item }) => {
  return (
    <Marker
      coordinate={{
        latitude: item?.location?.latitude,
        longitude: item?.location?.longitude,
      }}
    >
      <Image source={images.marker} style={styles.loginLogo} />
    </Marker>
  );
};

export default Markers;
