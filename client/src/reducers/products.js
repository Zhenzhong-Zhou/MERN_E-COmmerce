import {FETCH_ALL, CREATE} from "../constants/actionTypes";

const reducer = (products = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case CREATE:
			return [...products, action.payload];
		default:
			return products;
	}
}

export default reducer;