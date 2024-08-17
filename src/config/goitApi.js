import axios from "axios";

export const goitApi = axios.create({
  baseURL: "http://task-manager-api.goit.global/",
});

export const setToken = (token) => {
  goitApi.default.header.common.Autorization = `Bearer ${token}`;
};

export const clearToken = (token) => {
  goitApi.default.header.common.Autorization = ``;
};
