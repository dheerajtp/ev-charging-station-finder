import { Alert, Image, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styles from "../../assets/styles";
import customMapStyle from "../../utils/MapViewStyle.json";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLocation } from "../../state/slices/locationSlice";
import images from "../../assets/images";
import Markers from "./Markers";

const AppMapView = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.location);
  const [location, setLocation] = useState(value.location);
  console.info(value.evOptions);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      dispatch(addLocation(location.coords));
    })();
  }, []);

  if (location?.latitude) {
    return (
      <View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={customMapStyle}
          region={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
          >
            <Image source={images.currentLocation} style={styles.loginLogo} />
          </Marker>
          {value.evOptions.map((item, index) => {
            return <Markers key={index} item={item} />;
          })}
        </MapView>
      </View>
    );
  } else {
    return (
      <View style={styles.loadingMap}>
        <Text>Loading</Text>
      </View>
    );
  }
};

export default AppMapView;
