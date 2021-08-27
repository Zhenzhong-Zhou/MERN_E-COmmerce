const express = require("express");
const router = express.Router();
const getReactProducts = require("../controllers/reactProducts");
const createReactProduct = require("../controllers/reactProducts");

// All Products Route
router.get("/", getReactProducts.getReactProducts);

// Create Product Routes
router.post("/", createReactProduct.createReactProduct);

module.exports = router;