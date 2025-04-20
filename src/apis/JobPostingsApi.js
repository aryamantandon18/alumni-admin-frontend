import axios from 'axios';

const API_BASE_URL = '/job-postings';

export const getAllJobPostings = async (page = 1) => {
  const response = await axios.get(`${API_BASE_URL}?page=${page}`);
  return response.data;
};

export const getJobPostingById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createJobPosting = async (jobData) => {
  const response = await axios.post(API_BASE_URL, jobData);
  return response.data;
};

export const updateJobPosting = async (id, updatedData) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
  return response.data;
};

export const deleteJobPosting = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
