import axios from "axios";
import { AxiosInstance } from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


export default apiClient;