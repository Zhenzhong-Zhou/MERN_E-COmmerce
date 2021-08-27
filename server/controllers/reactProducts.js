const Product = require("../models/product");

// getProducts Controller
getReactProducts = async (req, res) => {
	try {
		const products = await Product.find();
		console.log(products);
		res.status(200).json(products);
	} catch (error) {
		res.status(404).json({message: error.message});
	}
};

// createProduct Controller
createReactProduct = async (req, res) => {
	const product = req.body;
	const createProduct = new Product(product);
	try {
		await createProduct.save();
		res.status(201).json(createProduct);
	} catch (error) {
		res.status(409).json({message: error.message});
	}
};

exports.getReactProducts = getReactProducts;
exports.createReactProduct = createReactProduct;
