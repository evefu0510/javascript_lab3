const output = document.getElementById('output');
// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/

function hamburger(buns, vegetables, cheeses, sauces, meat, patty, others) {
    let obj = {};
    obj.buns = buns;
    obj.vegetables = vegetables;
    obj.cheeses = cheeses;
    obj.sauces = sauces;
    obj.meat = meat;
    obj.patty = patty;
    obj.others = others;
    obj.combinations = function() {
        output.textContent = `Hello, the burger you ordered is ${this.buns}, ${this.vegetables.join(", ")}, ${this.cheeses}, ${this.sauces.join(", ")}, ${this.meat}, ${this.patty} patty, and ${this.others}.`;
    }
    return obj;
}

let hamburger1 = new hamburger("Brioche bun", ["Lettuce", "Tomato slices", "Red onion rings"], "Cheddar", ["Garlic mayo", "Pesto sauce"], "chicken", "Single", "Spicy pickles");
hamburger1.combinations();
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS