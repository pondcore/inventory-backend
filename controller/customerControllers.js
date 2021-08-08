const Customer = require('../models/Customer');

const index = async (req, res) => {
	try {
		const data = await Customer.find();

		res.json(data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Server Error" })
	}
}

const show = async (req, res) => {
	try {
		const data = await Customer.findById(req.params.id);

		res.json(data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Server Error" })
	}
}

const store = async (req, res) => {
	try {
		const record = req.body;
		const data = await Customer.create(record);

		res.json(data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Server Error" })
	}
}

const update = async (req, res) => {
	try {
		const record = req.body;
		const data = await Customer.findByIdAndUpdate(req.params.id, { $set: record });

		res.json(data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Server Error" })
	}
}

const destroy = async (req, res) => {
	try {
		const data = await Customer.findByIdAndDeleted(req.params.id);

		res.json({ message: `${req.params.id} was delete successfully.` });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Server Error" })
	}
}

module.exports = {
	index,
	show,
	store,
	update,
	destroy
}