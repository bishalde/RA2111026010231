const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    availability: {
        type: String,
        enum: ['yes', 'out-of-stock'],
        required: true
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
