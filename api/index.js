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
  config.headers["Content-Type"] = "application/json";
  config.headers["X-Goog-Api-Key"] = GOOGLE_KEY;
  config.headers["X-Goog-FieldMask"] = [
    "places.displayName",
    "places.formattedAddress",
    "places.location",
    "places.evChargeOptions",
    "places.photos",
  ];
  return config;
});

const API = {
  instance,
};

export default API;
