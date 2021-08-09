const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	product_name: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	sku: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		trim: true,
		required: false
	},
      qty: {
		type: Number,
		trim: true,
		required: true
	},
	weight: {
		type:Number,
		trim: true,
		required: true
	},
	cost: {
		type:Number,
		trim: true,
		required: true,
	
    },
    vat: {
        type: Number,
		trim: true,
		required: true,
	
	}
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
