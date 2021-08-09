require('dotenv').config()

const express = require('express');
const connectDB = require("./config/db");

const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
const port = process.env.PORT || 3000

connectDB();

app.use(express.json())

app.use('/api/customer', customerRoutes);
app.use('/api/user', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})