import axios from "axios";
import { BASE_URL, GOOGLE_KEY } from "../config/index";
import API from "../api/index";

const getLocations = async (body) => {
  const customHeaders = {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": GOOGLE_KEY,
    "X-Goog-FieldMask": [
      "places.displayName",
      "places.formattedAddress",
      "places.location",
      "places.evChargeOptions",
      "places.photos",
      "places.shortFormattedAddress",
    ],
  };
  try {
    let response = await axios.post(BASE_URL, body.data, {
      headers: customHeaders,
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    console.log("Response headers:", error.response.headers);
    console.log("Response data:", error.response.data);
  }
};

const HomeServices = {
  getLocations,
};

export default HomeServices;
