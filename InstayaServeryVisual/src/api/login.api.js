import axios from "axios";

const url = "https://pear-hummingbird-hat.cyclic.app";

export const loginUser = (data) => {
  return axios.post(url + "/api/login", data);
};
