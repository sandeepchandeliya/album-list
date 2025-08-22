import axios from 'axios'
//-----> a reusable Axios instance with base URL and headers
//-----> this allows easy API requests throughout the app
const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{ "Content-Type": "application/json" }
});

export default api;