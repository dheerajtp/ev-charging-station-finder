import { Text, View } from "react-native";
import AppMapView from "../../../components/home/AppMapView";
import styles from "../../../assets/styles";
import Header from "../../../components/home/Header";

const Home = () => {
  return (
    <View style={styles.mapContainer}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <AppMapView />
    </View>
  );
};

export default Home;
