import axios from "axios";
import config from "../config.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

axios.interceptors.request.use(
  function (config) {
    AsyncStorage.getItem("token")
      .then((res) => {
        if (
          res != null &&
          !config.url.includes("logout") &&
          !config.url.includes("login")
        ) {
          config.headers.Authorization = `Bearer ${res}`;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
const baseURL = config.BASE_URL;
export const AxiosPost = (api, data, success, failure) => {
  axios.post(`${baseURL}/${api}`, data).then(success).catch(failure);
};
export const AxiosGet = (api, data, success, failure) => {
  axios.get(`${baseURL}/${api}`, { params: data }).then(success).catch(failure);
};
