import * as api from "../api";
import {FETCH_ALL} from "../constants/actionTypes";

// Action Creators
export const getProducts = () => async (dispatch) => {
	try {
		const data = await api.fetchProducts();
		dispatch({type: FETCH_ALL, payload: data});
	} catch (error) {
		console.error(error);
	}
};