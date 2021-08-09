const connectDB = require('../config/db');

const userSeeder = require('./userSeeder');
const customerSeeder = require('./customerSeeder');

connectDB();
customerSeeder();
userSeeder()
