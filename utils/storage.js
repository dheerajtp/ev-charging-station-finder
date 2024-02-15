import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value, isJson = false) => {
  try {
    let data = "";
    data = isJson ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(key, data);
    return true;
  } catch (e) {
    console.log(e, "Error inside Store Data");
    return false;
  }
};

const getData = async (key, isJson = false) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return isJson && value !== null ? JSON.parse(value) : value;
  } catch (e) {
    console.log(e, "Error inside Get Data");
    return null;
  }
};

const storage = {
  storeData,
  getData,
};

export default storage;
