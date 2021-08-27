import axios from "axios";

const url = process.env.REACT_APP_LOCAL_URL;

export const fetchProducts = () => axios.get(url);
export const createReactProduct = (createReactProduct) => axios.post(url, createReactProduct);