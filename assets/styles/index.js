import { Dimensions, StyleSheet } from "react-native";
import color from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Roboto-Light",
  },
  loginLogo: {
    width: 200,
    height: 40,
    objectFit: "contain",
  },
  mtop: {
    marginVertical: 8,
  },
  loginMain: {
    width: "100%",
    // aspectRatio: 60,
    height: 400,
    marginTop: 20,
    objectFit: "cover",
  },
  heading: {
    fontSize: 25,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
  },
  content: {
    fontSize: 18,
    fontFamily: "Roboto-Light",
    textAlign: "center",
    marginTop: 6,
    padding: 8,
    color: color.GRAY,
  },
  button: {
    backgroundColor: color.PRIMARY,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 20,
  },
  buttonColor: {
    color: color.WHITE,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 17,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  loadingMap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  markerImage: {
    height: "60px",
    width: "60px",
  },
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  userLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.WHITE_TRANSPARENT,
  },
  placeListContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    width: "100%",
  },
  evImage: {
    width: "100%",
    borderRadius: 10,
    height: 130,
  },
  placeItem: {
    width: Dimensions.get("screen").width * 0.9,
    margin: 5,
    borderRadius: 10,
    backgroundColor:color.WHITE
  },
  placeTextView: {
    padding: 15,
  },
});

export default styles;
