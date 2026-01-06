import api from "./axiosInstance";

export const blogsAPI = {
  getAll: () => api.get("/blogs/list"),
  getBySlug: (slug) => api.get(`/blogs/${slug}`), // optional if your backend supports it
};
