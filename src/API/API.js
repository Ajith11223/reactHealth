import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"})
const token = JSON.parse(localStorage.getItem("auth"))

API.interceptors.request.use((req) => {
    if (JSON.parse(localStorage.getItem('auth'))) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  
    return req;
  });


  const testApi = axios.create({baseURL: "http://localhost:5000/"})


 const googleResponse = (formData)=>  testApi.post('/auth/google',formData)


  export {API,testApi,googleResponse}