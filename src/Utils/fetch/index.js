import { instance as axios } from "../../config";

export async function getData(url) {
  return await axios.get(url);
}
