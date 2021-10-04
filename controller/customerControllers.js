const Customer = require('../models/Customer');

const index = async (req, res) => {
	try {
		const data = await Customer.find();
		let result = [];
		data.forEach(customer => {
			customer.addr.forEach((addr, index) => {
				result.push({
					id: customer._id,
					key: addr._id,
					image: customer.image || 'https://picsum.photos/200/200',
					fullname: customer.firstname + ' ' + customer.lastname,
					firstname: customer.firstname,
					lastname: customer.lastname,
					description: addr.description,
					tambon_name: addr.tambon_name,
					amphur_name: addr.amphur_name,
					province_name: addr.province_name,
					post_code: addr.post_code
				})
			})
		})

		res.status(200).json(result);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: error.message })
	}
}

const show = async (req, res) => {
	try {
		const data = await Customer.findById(req.params.id);

		res.status(200).json(data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: error.message })
	}
}

const store = async (req, res) => {
	try {
		let formRecord = req.body;
		let record = {
			prefix: formRecord.prefix,
			firstname: formRecord.firstname,
			lastname: formRecord.lastname,
			phone: formRecord.phone,
			image: formRecord.image,
			addr: [{
				description: formRecord.address,
				tambon_name: formRecord.subdistrict,
				amphur_name: formRecord.district,
				province_name: formRecord.province,
				post_code: formRecord.postcode
			}]
		}
		const data = await Customer.create(record);
		// console.log(req.body);

		res.status(200).json(data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: error.message })
	}
}

const update = async (req, res) => {
	try {
		const record = req.body;
		const data = await Customer.findByIdAndUpdate(req.params.id, { $set: record });

		res.status(200).json(data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: error.message })
	}
}

const destroy = async (req, res) => {
	try {
		const data = await Customer.findByIdAndRemove(req.params.id);

		res.status(200).json({ success: true, message: `${req.params.id} was delete successfully.` });
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
