const Product = require("../models/product");

// getProducts Controller
getProducts = async (req, res) => {
	let query = Product.find();
	if (req.query.title !== null && req.query.title !== "") {
		query = query.regex("title", new RegExp(req.query.title, "i"));
	}
	try {
		const products = await query.exec();
		res.render("products/index", {
			products: products,
			searchOptions: req.query
		});
	} catch (error) {
		res.redirect("/");
	}
	// try {
	// 	const products = await Product.find();
	// 	console.log(products);
	// 	res.render("products/index", {product: new Product()});
	// 	// res.status(200).json(products);
	// } catch (error) {
	// 	res.status(404).json({message: error.message});
	// }
};

// newProduct Controller
newProduct = async (req, res) => {
	res.render("products/new", {product: new Product()});
};

// createProduct Controller
createProduct = async (req, res) => {
	const product = new Product({
		title: req.body.title,
		creator: req.body.creator,
		description: req.body.description,
		name: req.body.name,
		price: req.body.price,
		publishDate	: new Date(req.body.publishDate),
		tags: req.body.tags
	});
	try {
		const newProduct = await product.save();
		// res.redirect(`products/${newProduct.id}`);
		res.redirect(`products`);
	} catch (error) {
		res.render("products/new", {
			product: product,
			errorMessage: "Error creating Product"
		});
	}

	// const product = req.body;
	// const createProduct = new Product(product);
	// try {
	// 	await createProduct.save();
	// 	res.status(201).json(createProduct);
	// } catch (error) {
	// 	res.status(409).json({message: error.message});
	// }
};

exports.getProducts = getProducts;
exports.newProduct = newProduct;
exports.createProduct = createProduct;
