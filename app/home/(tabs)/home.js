import { Text, View } from "react-native";
import AppMapView from "../../../components/home/AppMapView";
import styles from "../../../assets/styles";

const Home = () => {
  return (
    <View style={styles.mapContainer}>
      <AppMapView />
    </View>
  );
};

export default Home;
