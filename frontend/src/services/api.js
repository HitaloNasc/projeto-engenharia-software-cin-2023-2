import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5555/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
});

export default api;