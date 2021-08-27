import * as api from "../api";
import {CREATE, FETCH_ALL} from "../constants/actionTypes";

// Action Creators
export const getProducts = () => async (dispatch) => {
	try {
		const {data} = await api.fetchProducts();
		dispatch({type: FETCH_ALL, payload: data});
	} catch (error) {
		console.error(error);
	}
};

export const createReactProduct = (product) => async (dispatch) => {
	try {
		const {data} = await api.createReactProduct(product);
		dispatch({type: CREATE, payload: data})
	} catch (error) {
		console.error(error);
	}
}