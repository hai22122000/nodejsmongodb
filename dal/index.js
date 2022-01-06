const {MongoClient}= require('mongodb');
const client = new MongoClient('mongodb+srv://hoanghai:Haikkkkk123@cluster0.5bziz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  client.connect((err) => {
    if (err) {
      console.log(err);
      client.close();
      process.exit(-1);
    }
    console.log("Successfully connect to MongoDB");
  });
  
  module.exports = client;