import axios from "axios";

const url = "http://localhost:9000";

export const fetchProducts = () => axios.get(url);