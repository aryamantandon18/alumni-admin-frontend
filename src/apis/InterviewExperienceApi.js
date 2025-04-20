import axios from 'axios';

const API_BASE_URL = '/interview-experience';

export const getAllInterviewExperiences = async (role = '', page = 1) => {
  const response = await axios.get(`${API_BASE_URL}?role=${role}&page=${page}`);
  return response.data;
};

export const getInterviewExperienceById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createInterviewExperience = async (experienceData) => {
  const response = await axios.post(API_BASE_URL, experienceData);
  return response.data;
};

export const updateInterviewExperience = async (id, updatedData) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
  return response.data;
};

export const deleteInterviewExperience = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
