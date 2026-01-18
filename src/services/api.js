import axios from "axios";

const API = axios.create({
  baseURL: "http://www.yashastratechnologies.com/api",
});

export default API;
