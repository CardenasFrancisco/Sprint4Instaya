import axios from "axios";

const url = "https://pear-hummingbird-hat.cyclic.app";

export async function getMails(token, data) {
  return await axios.get(url + "/api/mail", {
    headers: { token: `${token}`, name: `${data}` },
  });
}

export async function addMail(token, data) {
  return await axios.post(url + "/api/mail", data, {
    headers: { "Content-Type": "application/json", token: `${token}` },
  });
}

export async function deleteMail(token, data) {
  return await axios.delete(url + "/api/mail", data, {
    headers: { "Content-Type": "application/json", token: `${token}` },
  });
}

export async function updateMail(token, data) {
  return await axios.put(url + "/api/mail", data, {
    headers: { "Content-Type": "application/json", token: `${token}` },
  });
}

export async function getMail(token, id) {
  return axios.get(`${url}/api/mail/one`, {
    headers: { token: `${token}`, id: `${id}` },
  });
}
