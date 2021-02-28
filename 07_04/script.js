/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


const teams = ['NaVi', 'VP', 'HR', 'Gambit', 'Secret', 'OG', 'LGD', 'EG'];
console.log(teams);
teams.pop();
console.log(teams);
teams.unshift(teams[teams.length - 1]);
teams.pop();
console.log(teams);
teams.sort();
console.log(teams);
let bestTeam = teams.find(
    (el) => {
        if (el == "Secret") {
            return el;
        }
    }
)
console.log(bestTeam);
teams.splice(teams.indexOf(bestTeam), 1)
console.log(teams);