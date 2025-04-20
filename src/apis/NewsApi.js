import axios from 'axios';

const API_BASE_URL = '/news';

export const getAllNews = async (page = 1) => {
  const response = await axios.get(`${API_BASE_URL}?page=${page}`);
  return response.data;
};

export const getNewsById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createNews = async (newsData) => {
  const response = await axios.post(API_BASE_URL, newsData);
  return response.data;
};

export const updateNews = async (id, updatedData) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
  return response.data;
};

export const deleteNews = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
