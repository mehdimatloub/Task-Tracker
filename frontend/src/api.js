import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export const getTasks = async () => {
    const response = await axios.get(`${API_URL}tasks/`);
    return response.data;
};

export const getCategories = async () => {
    const response = await axios.get(`${API_URL}categories/`);
    return response.data;
};

export const addTask = async (task) => {
    const response = await axios.post(`${API_URL}tasks/`, task);
    return response.data;
};

export const addCategory = async (category) => {
    const response = await axios.post(`${API_URL}categories/`, category);
    return response.data;
};
