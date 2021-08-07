require("dotenv").config();

const connectDB = require('../config/db');

const userSeeder = require('./userSeeder');

connectDB();
userSeeder();
