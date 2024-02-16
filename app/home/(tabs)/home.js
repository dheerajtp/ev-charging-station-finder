import { Text, View } from "react-native";
import AppMapView from "../../../components/home/AppMapView";
import styles from "../../../assets/styles";
import Header from "../../../components/home/Header";
import SearchBar from "../../../components/home/SearchBar";
import { useSelector } from "react-redux";
import useGoogle from "../../../hooks/api/useGoogle";

const Home = () => {
  const { value } = useSelector((state) => state.location);
  const { mutation, isLoading, isError } = useGoogle.getLocation();
  
  const data = {
    includedTypes: ["restaurant"],
    maxResultCount: 10,
    locationRestriction: {
      circle: {
        center: {
          latitude: value?.latitude,
          longitude: value?.longitude,
        },
        radius: 500.0,
      },
    },
  };

  return (
    <View style={styles.mapContainer}>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location) => console.log(location)} />
      </View>
      <AppMapView />
    </View>
  );
};

export default Home;
