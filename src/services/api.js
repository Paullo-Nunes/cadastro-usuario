import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5173'  //usa a url da api
})

export default api