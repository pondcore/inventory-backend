const Order = require('../models/Order');
const mongoose = require("mongoose");

const index = async (req, res) => {
	try {
		const search = req.query.q;
		const fields = req.query.field || {};
		const limit = parseInt(req.query.pageSize || 10);
		const page = parseInt(req.query.current || 1);
		let query = null;

		const data = await Order.find(query)
			.populate('customer_id', 'prefix firstname lastname phone -_id')
			.populate('products.id')
			.select(fields)
			.limit(limit)
			.skip(limit * (page - 1))
			.sort({ 'createdAt': -1 });

		const totalOrder = await Order.countDocuments(query);

		res.status(200).json({
			success: true,
			orders: data,
			pagination: {
				current: page,
				pageSize: limit
			},
			total: totalOrder
		});
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: error.message })
	}
}

const show = async (req, res) => {
	try {
		const data = await Order.findById(req.params.id)
			.populate('customer_id',)
			.populate('products.id');

		res.status(200).json(data);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: error.message })
	}
}

const store = async (req, res) => {
	try {
		const formRecord = req.body;
		const record = {
			customer_id: formRecord.customerId,
			customer_addr_id: formRecord.addrId,
			sender_id: '1',
			products: formRecord.products,
			total_cost: formRecord.totalCost,
			total_weight: formRecord.totalWeight,
			shipping_cost: formRecord.shippingCost,
			total_price: formRecord.totalPrice,
			payment_status: formRecord.isPaid === '1' ? 'paid' : 'pending',
		}
		const data = await Order.create(record);

		res.status(200).json({
			success: true,
			message: "Order create successfully."
		});
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: error.message })
	}
}

const update = async (req, res) => {
	try {
		const formRecord = req.body;
		const record = {
			customer_id: formRecord.customerId,
			customer_addr_id: formRecord.addrId,
			sender_id: '1',
			products: formRecord.products,
			total_cost: formRecord.totalCost,
			total_weight: formRecord.totalWeight,
			shipping_cost: formRecord.shippingCost,
			total_price: formRecord.totalPrice,
			payment_status: formRecord.isPaid === '1' ? 'paid' : 'pending',
		}
		Order.findByIdAndUpdate(req.params.id, record).then(() => {
			res.status(200).json({ success: true, message: `${req.params.id} was update successfully.` });
		});

	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: error.message })
	}
}

const destroy = async (req, res) => {
	try {
		Order.findByIdAndRemove(req.params.id).then(() => {
			res.status(200).json({ success: true, message: `${req.params.id} was delete successfully.` });
		});

	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: error.message })
	}
}

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
}