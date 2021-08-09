require('dotenv').config()

const express = require('express');
const cors = require('cors');

const connectDB = require("./config/db");

const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
const port = process.env.PORT || 3000

connectDB();

app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))
app.use(cors())

app.use('/api/customer', customerRoutes);
app.use('/api/user', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

app.use((req, res, next) => {
    res.status(404).send("Not Found!")
})

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})