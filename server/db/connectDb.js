const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host} ✅`)
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = connectDb