import axios from "axios";
import url from "./fburl";
const instance = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});
export default instance;
