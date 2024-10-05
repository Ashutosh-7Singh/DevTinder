const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namasteDev:QPIOY4UaoZPZo5mC@namastenode.shhjx.mongodb.net/"
  );
};

connectDB().then(() => {
  console.log("Database connection Eatablished");
}).catch((err)=>{
    console.error("Database cannot be connected");
})
