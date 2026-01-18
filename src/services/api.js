import axios from "axios";

const API = axios.create({
  baseURL: "https://yashastra-backend.onrender.com/api",
});

export default API;
