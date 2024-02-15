import { Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchBar = ({ searchedLocation }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <GooglePlacesAutocomplete
        placeholder="Search EV Charging Station"
        onPress={(data, details = null) => {
          searchedLocation(details?.geometry?.location)
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_KEY,
          language: "en",
        }}
        enablePoweredByContainer={false}
        fetchDetails={true}
      />
    </View>
  );
};

export default SearchBar;
