import { instance as axios } from "../../config";

export async function getData(url) {
  return await axios.get(url);
}

export async function postData(url, payload, token) {
  return axios.post(url, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
