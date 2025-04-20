import axios from 'axios';

const API_BASE_URL = '/alumni/events'; 

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllEvents = async (page = 1) => {
  try {
    const response = await axiosInstance.get(`?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all events:', error);
    throw error;
  }
};

export const getEventById = async (id) => {
  try {
    const response = await axiosInstance.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event by ID:', error);
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await axiosInstance.post('', eventData);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const updateEvent = async (id, updatedData) => {
  try {
    const response = await axiosInstance.put(`/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    const response = await axiosInstance.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};
