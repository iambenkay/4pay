const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/4_pay'

module.exports = () => {
    mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    })
        .then(() => {
            console.log("Database connection was established")
        })
        .catch((error) => {
            throw new Error(error)
        }) 
}
