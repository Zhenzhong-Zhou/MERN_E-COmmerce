const express = require("express");
const router = express.Router();
const getProducts = require("../controllers/reactProducts");
const createProduct = require("../controllers/reactProducts");

// All Products Route
router.get("/", getProducts.getProducts);

// Create Product Routes
router.post("/", createProduct.createProduct);

module.exports = router;