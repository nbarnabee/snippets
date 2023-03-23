recipe = {
  title: "Generic recipe",
  ingredients: {
    milk: [1, "cup"],
    flour: [1, "cup"],
    sugar: [1, "cup"],
    eggs: [2, ""],
  },
  instructions: ["Put in a bowl.", "Mix around.", "Pour onto ground."],
};

document.getElementById("title").innerText = recipe.title;
ingredients = document.getElementById("ingredients");
instructions = document.getElementById("instructions");

ingredientList = recipe.ingredients;
instructionList = recipe.instructions;

for (entry in ingredientList) {
  ingredient = document.createElement("li");
  ingredient.textContent = `${ingredientList[entry][0]} ${ingredientList[entry][1]} ${entry}`;
  ingredients.appendChild(ingredient);
}

instructionList.forEach((entry) => {
  instruction = document.createElement("li");
  instruction.textContent = entry;
  instructions.appendChild(instruction);
});
