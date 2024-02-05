import axios from "axios";
import { PostType } from "../types/PostTypes";

const baseAPIUrl = "https://jsonplaceholder.typicode.com";

const requestConfig = {
  headers: {
    Accept: "application/json",
  },
};

export const getPosts = async () => {
    return await axios
    .get<PostType[]>(baseAPIUrl + "/posts", requestConfig)
    .then((response) => {
        // console.log(JSON.stringify(response, null, 4));
        // console.log("response status is: ", response.status);
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
}