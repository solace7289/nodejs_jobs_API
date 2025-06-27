//connectDB
const mongoose = require('mongoose')

const connectDB = async (uri) => {
    try {
        console.log(`Test uri: ${uri}`);
        
        // connect mongoose db
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        })
        console.log(`MongoDB connect established successfully.`);
        
    } catch (error) {
        console.log(`MongoDB connect fail, ${error}`);
        process.exit(1) // stop server if can not connect
    }
}

module.exports = connectDB


