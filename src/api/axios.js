
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://boytoys.fly.dev/api',
});

// api.interceptors.request.use((config) => {
//     const token = Cookies.get('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   });

export default api;


// localStorage.setItem("myCat", "Tom");

// const cat = localStorage.getItem("myCat");