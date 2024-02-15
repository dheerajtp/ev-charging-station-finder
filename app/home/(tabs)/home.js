import { Text, View } from "react-native";
import AppMapView from "../../../components/home/AppMapView";
import styles from "../../../assets/styles";
import Header from "../../../components/home/Header";
import SearchBar from "../../../components/home/SearchBar";

const Home = () => {
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
