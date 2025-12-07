import mongoose from "mongoose";
// Create Schema

const chefSchema = new mongoose.Schema({
    name: { type: String, required: true },
    experience: Number,
    specialty: String,
    awards: [String],
    restaurant: {
        restaurant_name: String,
        location: String,
        rating: Number
    },
    joinedDate: { type: Date, default: Date.now() }
});

//create model

const Chef = mongoose.model("Chefs", chefSchema);

export default Chef;