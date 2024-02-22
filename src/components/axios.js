import axios from 'axios';
import { MOVIE_BASE_URL, ACCESS_TOKEN } from '../constants';

const instance = axios.create({
    baseURL: MOVIE_BASE_URL,
});

// Request interceptor
instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            console.error('Response Error:', error.response.status, error.response.data);
        } else if (error.request) {
            console.error('Request Error:', error.request);
        } else {
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default instance;
