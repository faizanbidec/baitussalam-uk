import api from "./axiosInstance";

export const transactionAPI = {
  createTransaction: (data) => api.post("/transactions/create", data),
//   getTransaction: (id) => api.get(`/transactions/${id}`),
//   updateTransaction: (id, data) => api.put(`/transactions/${id}`, data),
//   deleteTransaction: (id) => api.delete(`/transactions/${id}`),
};
