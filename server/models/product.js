const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    creator: {type: String, required: true},
    // price: {type: Number, required: true},
    tags: [String],
    selectedFile: String ,
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