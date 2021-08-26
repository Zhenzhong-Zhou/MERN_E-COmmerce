const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    name: String,
    price: Number,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model("Product", productSchema);