
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports ={
    mongoose
}

// process.env.NODE_ENV === 'production';
// process.env.NODE_ENV === 'developpement';
// process.env.NODE_ENV === 'test';