const apiUrl = import.meta.env.VITE_API_URL;

import axios from "axios";

const api = axios.create({
  baseURL: apiUrl,
});

export { api };
