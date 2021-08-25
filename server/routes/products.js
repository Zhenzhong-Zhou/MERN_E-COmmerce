const express = require("express");
const router = express.Router();
const getProducts = require("../controllers/products");
const newProduct = require("../controllers/products");
const createProduct = require("../controllers/products");

// All Products Route
router.get("/", getProducts.getProducts);

// New Product Routes
router.get("/new", newProduct.newProduct);

// Create Product Routes
router.post("/", createProduct.createProduct);

module.exports = router;