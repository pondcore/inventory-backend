require("dotenv").config();

const Customer = require('../models/Customer');
const customerData = require('../data/customers');

const customerSeeder = async () => {
    try {
        await Customer.deleteMany({});
        await Customer.insertMany(customerData);

        console.log("User data Import Success");

        process.exit();
    } catch (error) {
        console.error("Error User data import");
        process.exit(1);
    }
}

module.exports = customerSeeder