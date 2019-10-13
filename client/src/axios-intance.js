import axios from "axios";
import url from "./fburl";
const instance = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  proxy: {
    host: "http://185.91.55.98",
    port: 8000
  }
});
export default instance;
