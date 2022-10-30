const mongoose = require('mongoose');



const connectDB = (connectURL) => {
    return mongoose.connect(connectURL, {
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true
    });
};

module.exports = {connectDB};