import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styles from "../../assets/styles";
import customMapStyle from "../../utils/MapViewStyle.json";

const AppMapView = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={customMapStyle}
      />
    </View>
  );
};

export default AppMapView;
