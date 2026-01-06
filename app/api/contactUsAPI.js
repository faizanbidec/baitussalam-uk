import api from "./axiosInstance";

export const contactAPI = {
  submitContactForm: (data) => api.post("/contact-us", data),
};
