import Recipe from "./models/recipe.js";
import "./app.js"; // Ensure database connection is established by running app.js
import mongoose from "mongoose";

// Test function to create and save a new recipe
// Create document/record in the Recipes collection
//put inside a function so that we can get an output after creation

async function createRecipe() {
    const newRecipe = await Recipe.create([{
        title: "Spaghetti Bolognese",
        ingredients: [
            { ingredientName: "Spaghetti", quantity: "200g" },
            { ingredientName: "Ground Beef", quantity: "300g" },
            { ingredientName: "Tomato Sauce", quantity: "1 cup" }
        ],
        instructions: [
            "Boil spaghetti according to package instructions.",
            "Cook ground beef until browned.",
            "Add tomato sauce to beef and simmer for 15 minutes.",
            "Serve sauce over spaghetti."
        ],
        prepTime: 15,
        cookTime: 30,
        servings: 4
    },{
        title: "Chicken Curry",
        ingredients: [
            { ingredientName: "Chicken", quantity: "500g" },
            { ingredientName: "Curry Powder", quantity: "2 tbsp" },
            { ingredientName: "Coconut Milk", quantity: "1 can" }
        ],
        instructions: [
            "Sauté chicken until cooked through.",
            "Add curry powder and cook for 2 minutes.",
            "Pour in coconut milk and simmer for 20 minutes.",
            "Serve with rice."
        ],
        prepTime: 20,
        cookTime: 40,
        servings: 4
    }]);
    console.log("New Recipe Created:", newRecipe);
}
// createRecipe();

// FIND-----------
// async function findRecipe() {
//     const recipes = await Recipe.find({title : "Chicken Curry"});
//     console.log("All Recipes:", recipes);
//     console.log("TOTAL Recipes Found:", recipes.length);
    
// }

// async function findRecipe() {
//     const recipes = await Recipe.find({prepTime : { $gt: 15 }});
//     console.log("All Recipes:", recipes);
    
// }

// async function findRecipe() {
//     const recipes = await Recipe.find({"ingredients.ingredientName" : "Coconut Milk"});
//     console.log("All Recipes:", recipes);
    
// }

// async function findRecipe() {
//     const recipes = await Recipe.find().sort({ prepTime: 1 });
//     console.log("All Recipes:", recipes);
    
// }

// findRecipe();

// UPDATE-----------
// async function updateRecipe() {
//     const res = await Recipe.updateOne(
//         { title: "Spaghetti Bolognese" }, // Filter criteria
//         { cookTime: 35 }  // Update operation
//     );
//     console.log("Update Result:", res);
// }

// async function updateRecipe() {
//     const res = await Recipe.updateMany(
//         {}, // Filter criteria
//         { cookTime: 100 }  // Update operation
//     );
//     console.log("Update Result:", res);
// }

// async function updateRecipe() {
//     const res = await Recipe.updateOne(
//         { title: "Spaghetti Bolognese" }, // Filter
//         { $push: { ingredients: { ingredientName: "Chicken", quantity: "1" } } } // Update operation
//     );
//     console.log("Update Result:", res);
// }

//     // Fetch and print the updated document to confirm the push
//     const updated = await Recipe.findOne({ title: "Chicken Curry" });
//     console.log("Updated Recipe:", updated);
// }

// async function updateRecipe() {
//     const res = await Recipe.updateOne(
//         { title: "Chicken Curry" }, // Filter
//         { $push: { instructions: "Serve the platter"} } // Update operation
//     );
//     console.log("Update Result:", res);
// }

// async function updateRecipe() {
//     const res = await Recipe.updateOne(
//         { title: "Chicken Curry" }, // Filter
//         { $set: { "instructions.4": "Set all the plates" } }// Update operation
//     );
//     console.log("Update Result:", res);

// }

// async function updateRecipe() {
//     const res = await Recipe.updateOne(
//         { title: "Chicken Curry" }, // Filter
//         { $set: { "ingredients.1.quantity": "10 tbsp" } }// Update operation
//     );
//     console.log("Update Result:", res);

// }

// async function updateRecipe() {const res = await Recipe.updateOne(
//             { title: "Chicken Curry" }, // Filter
//             { $pull: { ingredients: { ingredientName: "Curry Powder" } } } // Remove ingredient by name
//         );
//         console.log("Update Result:", res);

//     }
// updateRecipe();

// DELETE-----------
// async function deleteRecipe() {
//     const res = await Recipe.deleteOne(
//         { title: "Spaghetti Bolognese" } // Filter criteria
//     );
//     console.log("Delete Result:", res);
// }

//Search by ingredient keyword
// async function findRecipe() {
//     const recipes = await Recipe.find({ ingredients: { $elemMatch: { ingredientName: /Chicken/i } } });
//     console.log("All Recipes:", recipes);
    
// }
//Search by cooking instruction keyword
// async function findRecipe() {
//     const recipes = await Recipe.find({ instructions: { $elemMatch: { $regex: /rice/i } } }); // Case-insensitive search for "rice" in instructions
//     console.log("All Recipes:", recipes);
// }

//Find all receipies with more than 3 ingredients
// async function findRecipe() {
//     const recipes = await Recipe.find({ $expr: { $gt: [{ $size: "$ingredients" }, 3] } }); // Checks for more than 3 ingredients
//     console.log("All Recipes with more than 3 ingredients:", recipes);
// }

//Sort by number of instruction steps descending
// async function findRecipe() {
//     const recipes = await Recipe.aggregate([
//         {
//             $addFields: {
//                 instructionCount: { $size: "$instructions" }
//             }
//         },
//         {
//             $sort: { instructionCount: 1 }
//         }
//     ]);
//     console.log("All Recipes sorted by number of instruction steps (descending):", recipes);
// }

//how many recipes contain more than 5 steps
async function findRecipe() {
    const count = await Recipe.countDocuments({ $expr: { $gte: [{ $size: "$instructions" }, 4] } });
    console.log("Number of recipes with more than 5 steps:", count);
}

findRecipe();





