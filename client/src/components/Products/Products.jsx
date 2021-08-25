import Product from "./Product/Product";
import useStyles from "./styles";

const Products = () => {
	const classes = useStyles();
	return (
		<>
			<div>Products</div>
			<Product/>
			<Product/>
		</>
	)
};

export default Products;