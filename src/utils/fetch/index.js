import { instance as axios } from "../../config";

export async function getData(url) {
  try {
    return axios.get(url);
  } catch (error) {
    console.log(error);
  }
}
