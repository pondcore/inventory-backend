const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
	prefix: {
		type: String,
		trim: true,
		required: false
	},
	firstname: {
		type: String,
		trim: true,
		required: true
	},
	lastname: {
		type: String,
		trim: true,
		required: true
	},
	phone: {
		type: String,
		trim: true,
		required: true,
		maxLength: 10
	},
	addr: [addrSchema]
});

const addrSchema = new mongoose.Schema({
	description: {
		type: String,
		trim: true,
		required: true
	},
	tambon_name: {
		type: String,
		trim: true,
		required: true
	},
	amphur_name: {
		type: String,
		trim: true,
		required: true
	},
	province_name: {
		type: String,
		trim: true,
		required: true
	},
	post_code: {
		type: String,
		trim: true,
		required: true,
		maxLength: 5
	}
});


const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
