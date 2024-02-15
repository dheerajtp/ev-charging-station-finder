import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styles from "../../assets/styles";
import customMapStyle from "../../utils/MapViewStyle.json";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLocation } from "../../state/slices/locationSlice";

const AppMapView = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.location);
  console.log(value, "value of location from store");
  const [location, setLocation] = useState(value.location);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      dispatch(addLocation(location));
    })();
  }, []);

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
