const User = require('../models/User');

const user_index = async (req, res) => {
	try {
		const data = await User.find();

		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" })
	}
}

const user_show = async (req, res) => {
	try {
		const data = await User.findById(req.params.id);

		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" })
	}
}

module.exports = {
	user_index,
	user_show
}
