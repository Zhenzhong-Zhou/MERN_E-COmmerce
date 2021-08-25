import {FETCH_ALL, CREATE} from "../constants/actionTypes";

const reducer = (products = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return products;
		case CREATE:
			return products;
		default:
			return products;
	}
}

export default reducer;