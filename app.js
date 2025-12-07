import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/restaurant"
mongoose.connect(MONGO_URI)
.then(() => console.log("Connected to MongoDB successfully"))
.catch((err) => console.log(err));
