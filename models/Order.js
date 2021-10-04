const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	customer_id: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	customer_addr_id: {
		type: String,
		required: true
	},
	sender_id: {
		type: Number,
		trim: true,
		required: false
	},
	product_id: {
		type: Number,
		trim: true,
		required: true
	},
	total_cost: {
		type: Number,
		trim: true,
		required: true
	},
	total_weight: {
		type: Number,
		trim: true,
		required: true,

	},
	shipping_cost: {
		type: Number,
		trim: true,
		required: true,

	},
	total_price: {
		type: Number,
		trim: true,
		required: true,

	},
	payment_status: {
		type: Number,
		trim: true,
		required: true,

	},
	timestamp: {
		type: Date,
		trim: true,
		required: true,

	}
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
