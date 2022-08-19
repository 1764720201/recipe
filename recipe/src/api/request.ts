import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import nprogress from "nprogress";
import useStore from "@/stores";
const server = axios.create({
  baseURL: "",
  timeout: 5000,
});
server.interceptors.request.use((config: AxiosRequestConfig) => {
  if (useStore().user.token) {
    if (config.headers) config.headers.Authorization = useStore().user.token;
  }
  nprogress.start();
  return config;
});
server.interceptors.response.use(
  (res: AxiosResponse) => {
    nprogress.done();
    return res.data;
  },
  (err) => {
    nprogress.done();
    return Promise.reject(err);
  }
);
export default server;
