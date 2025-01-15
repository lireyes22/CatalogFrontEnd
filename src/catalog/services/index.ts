import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_JSON_SERVER;

export const productsService = axios.create({
    baseURL: `${VITE_API_URL}/products`,
    headers:{
        "Content-type": "application/json"
    }
});
