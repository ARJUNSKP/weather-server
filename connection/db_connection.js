const mongoose = require("mongoose");

mongoose
  .connect(process.env.BASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((error) => {
    console.log("mongodb is not connected");
  });
