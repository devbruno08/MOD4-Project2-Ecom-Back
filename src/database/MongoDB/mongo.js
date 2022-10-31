const mongoose = require('mongoose');

function mongoConnect() {
  mongoose
    .connect(String(process.env.MONGO_URL), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => {
      console.log(`Error in database: ${err}`);
    });
}

module.exports = mongoConnect;
