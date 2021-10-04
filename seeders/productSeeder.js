require("dotenv").config();

const Product = require('../models/Product');
const productData = require('../data/products');

const productSeeder = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productData);

        console.log("Product data Import Success");

        process.exit();
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = productSeeder