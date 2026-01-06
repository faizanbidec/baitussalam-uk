import api from "./axiosInstance";

export const campaignsAPI = {
  getAll: () => api.get("/programs/list"), 
};
