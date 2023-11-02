const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/books', {
  useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Export connection 
module.exports = mongoose.connection;