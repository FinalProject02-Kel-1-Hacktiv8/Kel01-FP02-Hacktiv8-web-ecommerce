import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    return Promise.reject(err);
  }
);
