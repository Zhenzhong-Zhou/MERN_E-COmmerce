const Product = require("../models/product");

// getProducts Controller
getProducts = async (req, res) => {
	res.render("products/index");
}

// newProduct Controller
newProduct = async (req, res) => {
	res.render("products/new");
}

// createProduct Controller
createProduct = async (req, res) => {
	res.send("Create!");
}

exports.getProducts = getProducts;
exports.newProduct = newProduct;
exports.createProduct = createProduct;
