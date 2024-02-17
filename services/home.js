import API from "../api";

const getLocations = async (body) => {
  console.log(JSON.stringify(body));
  let response = await API.instance.post(":searchNearby", body);
  console.log(" === response === ");
  console.log(response);
  return response;
};

const HomeServices = {
  getLocations,
};

export default HomeServices;
