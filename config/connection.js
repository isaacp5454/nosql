const mongoose = require ('mongoose');
 mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser: true,
  useUnifiedTopology: true      //this code is from  mongodb documetaion.
 })
 .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });