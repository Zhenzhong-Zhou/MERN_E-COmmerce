const express = require("express");
const router = express.Router();

// All Creators Route
router.get("/", (req, res) => {
	res.render("creators/index");
});

// New Creator Routes
router.get("/new", (req, res) => {
	res.render("creators/new");
});

module.exports = router;