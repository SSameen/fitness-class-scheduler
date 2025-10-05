import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000"
});

// Classes
export const getClasses = async () => await api.get("/classes");
export const addClass = async (newClass) => await api.post("/classes", newClass);
export const updateClass = async (id, updatedClass) => await api.put(`/classes/${id}`, updatedClass);
export const deleteClass = async (id) => await api.delete(`/classes/${id}`);

// Clients
export const getClients = async () => await api.get("/clients");
