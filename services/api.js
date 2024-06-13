import axios from "axios";
import { areas } from "../utils/areas";

export const http = axios.create({
  baseURL: "https://site-backend-67zq.onrender.com",
});

export const api = {
  sendMailAdmin: (endpoint, payload) => http.post(endpoint, payload),
};

const tempInstance = axios.create({
  baseURL: "/assets/areas.json",
});

export const apiArea = {
  getArea: () => tempInstance.get(),
};
