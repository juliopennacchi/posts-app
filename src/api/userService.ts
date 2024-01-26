import axios from "axios";
import { UserType } from "../types/UserTypes";

const baseAPIUrl = "https://jsonplaceholder.typicode.com/";

const requestConfig = {
  headers: {
    Accept: "application/json",
  },
};

export const getUsers = async () => {
  return await axios
    .get<UserType[]>(baseAPIUrl + "/users", requestConfig)
    .then((response) => {
      console.log(JSON.stringify(response, null, 4));

      console.log("response status is: ", response.status);
      return response.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
      return undefined;
    })
};
