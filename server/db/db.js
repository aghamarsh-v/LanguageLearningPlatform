const Mongoose = require("mongoose")

const localDB = 'mongodb://localhost:27017/spez_user_auth'
const connectDB = async function () {
    await Mongoose.connect(localDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    
    console.log("Mongo DB connected")
};

module.exports = connectDB;