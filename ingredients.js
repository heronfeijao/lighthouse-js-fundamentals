const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let w = 0
while(w < ingredients.length) {
  console.log(ingredients[w]);
  w++;
}

// Write a for loop that prints out the contents of ingredients:
for(i = 0 ; i < ingredients.length ; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let w2 = ingredients.length-1;
while(w2 >= 0) {
  console.log(ingredients[w2]);
  w2--;
}