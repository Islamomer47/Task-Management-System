import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const register = async (user) => {
  const response = await axios.post(`${API_URL}/auth/register`, user);
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(`${API_URL}/auth/login`, user);
  return response.data;
};

export const getTasks = async (token) => {
  const response = await axios.get(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createTask = async (task, token) => {
  const response = await axios.post(`${API_URL}/tasks`, task, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateTask = async (id, task, token) => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, task, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteTask = async (id, token) => {
  await axios.delete(`${API_URL}/tasks/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
