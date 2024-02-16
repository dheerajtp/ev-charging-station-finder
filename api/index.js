import axios from "axios";
import { BASE_URL, GOOGLE_KEY } from "../config";

const instance = axios.create({ baseURL: BASE_URL });
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log("error", error);
    return error;
  }
);

instance.interceptors.request.use((config) => {
  config.headers["X-Goog-Api-Key"] = GOOGLE_KEY;
  config.headers["X-Goog-FieldMask"] = [
    "places.displayName",
    "places.formattedAddress",
    "places.location",
    "places.evChargerOptions",
    "places.photos",
  ];
  config.headers["Origin"] = ORIGIN;
  return config;
});

const API = {
  instance,
};

export default API;
