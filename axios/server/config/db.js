const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully!!");
    }catch(error){
        console.error("Trouble connecting to mongoDB", error.message);
        process.exit(1);
    }
}

module.exports = connectDB