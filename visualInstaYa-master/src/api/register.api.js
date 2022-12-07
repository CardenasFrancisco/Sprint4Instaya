import axios from "axios";
const url = "https://pear-hummingbird-hat.cyclic.app";
export const registerUser = async (data) => {
  console.log(data);
  return await axios.post(url + "/api/register", data);
};
