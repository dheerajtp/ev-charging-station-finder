import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import PlaceListItem from "./PlaceListItem";

const PlaceListView = () => {
  const { evOptions } = useSelector((state) => state.location.value);
  console.log(useSelector((state) => state.location));
  console.info(evOptions?.length, "evoptions");
  return (
    <View>
      {evOptions && evOptions.length > 0 && (
        <FlatList
          data={evOptions}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View key={index}>
                <PlaceListItem item={item} />
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default PlaceListView;
