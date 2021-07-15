const axios = require('axios');

// We can configure interceptors
// instance.interceptors.request...
let axiosInstance;

const initAxios = () => {
  axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
  });
};

console.log('axios initialized');

exports.initAxios = initAxios;
exports.getAxios = () => axiosInstance;
