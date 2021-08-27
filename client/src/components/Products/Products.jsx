import {useSelector} from "react-redux";

import Product from "./Product/Product";
import useStyles from "./styles";

const Products = () => {
	const products = useSelector((state) => state.products);
	const classes = useStyles();
	console.log("products: ", products);
	return (
		<>
			<div>Products</div>
			<Product/>
			<Product/>
		</>
	)
};

export default Products;