const mongoose = require("mongoose");
const dbConection = mongoose.connection;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));
dbConection.on("open", (_) => {
  console.log("database is connected to mongo atlas");
});
dbConection.on("error", (error) => {
  console.log(error);
});
