/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2022-09-09 09:58:33
 * @Company: ncuhome
 * @LastEditTime: 2023-06-17 02:06:34
 * @FilePath: \notelog_fe\src\utils\network.ts
 * @Description:
 */
import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
axios.defaults.baseURL = "http://42.192.229.234:8081";
axios.defaults.timeout = 7500;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    token &&
      ((
        config.headers as AxiosRequestHeaders
      ).Authorization = `Bearer ${token}`);
    return config;
  },
  (error: any) => {
    throw new Error(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error.response);
  }
);
