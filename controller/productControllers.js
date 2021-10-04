const Product = require('../models/Product');

const index = async (req, res) => {
	try {
		let data = await Product.find();
		data.forEach((item, index) => {
			data[index].image = item.image || 'https://picsum.photos/200/200'
		})

		res.status(200).json(data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: error.message })
	}
}

const show = async (req, res) => {
	try {
		const data = await Product.findById(req.params.id);

		res.status(200).json(data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: error.message })
	}
}

const store = async (req, res) => {
	try {
		const formRecord = req.body;

		const data = await Product.create(formRecord);

		res.status(200).json(data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: error.message })
	}
}

const update = (req, res) => {
	try {
		const formRecord = req.body;
		Product.findByIdAndUpdate(req.params.id, formRecord).then(() => {
			res.status(200).json({ success: true, message: `${req.params.id} was update successfully.` });
		});
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: error.message })
	}
}

const destroy = (req, res) => {
	try {
		Product.findByIdAndRemove(req.params.id).then(() => {
			res.status(200).json({ success: true, message: `${req.params.id} was delete successfully.` });
		});

	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: error.message })
	}
}

module.exports = {
	index,
	show,
	store,
	update,
	destroy
}
