import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

const AddRecipe = () => {
  const [recipe, updateRecipe] = useState({
    uuid: uuidv4(),
    title: "",
    description: "",
    servings: 0,
    prepTime: 0,
    cookTime: 0,
    postDate: "",
    editDate: "",
    ingredients: [
      {
        uuid: uuidv4(),
        amount: "",
        measurement: "",
        name: "",
      },
    ],
    directions: [
      {
        instructions: "",
        optional: false,
      },
    ],
  });

  return (
    <div>
      <h2 className="my-10 text-center font-secondary text-primary text-3xl tracking-wide">
        Add Recipe
      </h2>
      <div className="flex justify-center">
        <form className="flex flex-col">
          <label
            htmlFor="title"
            className="mb-1 font-primary font-medium text-gray-500 text-sm"
          >
            Recipe Name
          </label>
          <input
            type="text"
            name="title"
            placeholder="Ex: Cobb salad"
            className="input"
          />
          <label
            htmlFor="description"
            className="mb-1 font-primary font-medium text-gray-500 text-sm"
          >
            Recipe Description
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Recipe description"
            className="input"
          />
          <label
            htmlFor="number"
            className="mb-1 font-primary font-medium text-gray-500 text-sm"
          >
            Servings
          </label>
          <input
            type="number"
            name="servings"
            placeholder="Ex: 3"
            className="input"
          />
          <label
            htmlFor="number"
            className="mb-1 font-primary font-medium text-gray-500 text-sm"
          >
            Prepartion Time (mins)
          </label>
          <input
            type="number"
            name="prepTime"
            placeholder="Ex: 15"
            className="input"
          />
          <label
            htmlFor="number"
            className="mb-1 font-primary font-medium text-gray-500 text-sm"
          >
            Cook Time (mins)
          </label>
          <input
            type="number"
            name="cookTime"
            placeholder="Ex: 25"
            className="input"
          />
          <label
            htmlFor="ingredients"
            className="mb-1 font-primary font-medium text-gray-500 text-sm"
          >
            Recipe Description
          </label>
          <textarea
            type="text"
            name="ingredients"
            placeholder="Recipe Ingredients"
            className="input"
          />
          <label
            htmlFor="instructions"
            className="mb-1 font-primary font-medium text-gray-500 text-sm"
          >
            Recipe Instructions
          </label>
          <textarea
            type="text"
            name="instructions"
            placeholder="Recipe Instructions"
            className="input"
          />
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
