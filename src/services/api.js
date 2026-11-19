import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.BASE_URL || 'http://localhost:3000'  //usa a url da api
})

export default api