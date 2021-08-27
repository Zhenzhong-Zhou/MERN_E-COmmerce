import axios from "axios";

const url = "http://localhost:9000/products/secret/data";

export const fetchProducts = () => axios.get(url);
export const createReactProduct = (createReactProduct) => axios.post(url, createReactProduct);