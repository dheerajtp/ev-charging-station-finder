import { useMutation, useQuery } from "@tanstack/react-query";
import HomeServices from "../../services/home";

const getLocation = () => {
  return useMutation({
    mutationFn: HomeServices.getLocations,
    mutationKey: "get-location",
  });
};

const useGoogle = {
  getLocation,
};

export default useGoogle;
