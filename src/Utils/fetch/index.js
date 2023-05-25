import { instance as axios } from "../../config";

export async function getData(url, params) {
  try {
    return await axios.get(url, {
      params,
    });
  } catch (error) {
    console.log("error", error);
  }
}

export async function postData(url, payload, token) {
  try {
    return axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
}
