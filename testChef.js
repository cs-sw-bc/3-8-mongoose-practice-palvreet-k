import Chef from "./models/chef.js";
import "./app.js";

async function createChef() {
    const newChef = await Chef.create([{
        name: "Gordon Ramsay",
        experience: 25,
        specialty: "British cuisine",
        awards: ["Michelin Star", "Best Chef Award"],
        restaurant: {
            restaurant_name: "Hell's Kitchen",
            location: "Las Vegas",
            rating: 4.8
        }
    },
{
        name: "Jamie Oliver",
        experience: 20,
        specialty: "Italian cuisine",
        awards: ["Best TV Chef"],
        restaurant: {
            restaurant_name: "Fifteen",
            location: "London",
            rating: 4.5
        }
},
{
        name: "Alice Waters",
        experience: 30,
        specialty: "California cuisine",
        awards: ["James Beard Award"],
        restaurant: {
            restaurant_name: "Chez Panisse",
            location: "Berkeley",
            rating: 4.7
        }
}]);
    console.log("New Chef Created:", newChef);
}     
// createChef();