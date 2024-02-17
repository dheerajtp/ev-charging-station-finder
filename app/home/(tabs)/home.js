import { Text, View } from "react-native";
import AppMapView from "../../../components/home/AppMapView";
import styles from "../../../assets/styles";
import Header from "../../../components/home/Header";
import SearchBar from "../../../components/home/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import useGoogle from "../../../hooks/api/useGoogle";
import { addLocation } from "../../../state/slices/locationSlice";

const Home = () => {
  const { value } = useSelector((state) => state.location);
  const { mutate, isLoading, isError } = useGoogle.getLocation();
  const dispatch = useDispatch();

  const data = {
    includedTypes: ["electric_vehicle_charging_station"],
    maxResultCount: 10,
    locationRestriction: {
      circle: {
        center: {
          latitude: value?.location?.lat,
          longitude: value?.location?.lng,
        },
        radius: 5000.0,
      },
    },
  };
  
  return (
    <View style={styles.mapContainer}>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar
          searchedLocation={(location) => {
            dispatch(addLocation(location));
            mutate({ data });
          }}
        />
      </View>
      <AppMapView />
    </View>
  );
};

export default Home;
