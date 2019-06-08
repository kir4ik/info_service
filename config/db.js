const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
  const uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || config.get('mongoURI');

  try {
    await mongoose.connect(uristring, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
