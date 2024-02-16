import API from "../api";

const getLocations = async (body) => {
  let response = API.instance.post("", body);
  return response;
};

const HomeServices = {
  getLocations,
};

export default HomeServices;
