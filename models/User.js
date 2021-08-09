const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
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
	addr: {
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

const User = mongoose.model("user", userSchema);

module.exports = User;
