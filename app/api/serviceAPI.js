// app/api/servicesAPI.js
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const servicesAPI = {
  getAll: () => axios.get(`${BASE_URL}services/list`),
};
