import mongoose from "mongoose";

// create Schema

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: [{ingredientName: String, quantity: String}],
    instructions: [String],
    prepTime: Number,
    cookTime: Number,
    servings: Number,
});


//create model

const Recipe = mongoose.model("Recipes", recipeSchema);

export default Recipe;

/* Export helps us in exporting output from a file so that it can be used in other files */