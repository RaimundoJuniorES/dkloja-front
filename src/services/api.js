import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:3001/api'
// });

const api = axios.create({
    baseURL: 'http://localhost:8080/'
});

export default api;