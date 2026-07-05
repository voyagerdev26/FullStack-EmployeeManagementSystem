import axios from "axios";

const api = axios.create({
  baseURL:(import.meta.env.VITE_BASE_URL || "http://localhost:4000")+"/api"
})

// Attach Auth token to all network requests

api.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token");
  if(token){
    config.headers.Authorization= `Bearer ${token}`
  }
  return config;
})
export default api; // now we can use this api to make http request and token will be added in the request by default from here