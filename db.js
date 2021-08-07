require('dotenv').config()

const mongoose = require('mongoose')
const mongo_uri = process.env.MONGODB_URI

async function createDB() {
    await mongoose.connect(mongo_uri, object);
}