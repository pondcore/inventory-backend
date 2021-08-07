require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: true,

		})
		console.log("MongoDB connection SUCCESS");
	} catch (error) {
		console.error("MongDB connection FAIL");
		process.exit(1);
	}
}

module.exports = connectDB;
