import axios from "axios";

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://localhost:8000',
    headers: {
        "Content-Type": "application/json",
    },
});