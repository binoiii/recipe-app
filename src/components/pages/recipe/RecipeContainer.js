import { useContext } from "react";
import { useParams } from "react-router-dom";

import { GlobalContext } from "../../../context/GlobalState";

import RecipeImg from "./RecipeImg";
import RecipeDetails from "./RecipeDetails";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";

const RecipesContainer = () => {
  const { id } = useParams();

  const { recipes, specials } = useContext(GlobalContext);

  const recipe =
    recipes.length > 0 && recipes.find((recipe) => recipe.uuid === id);

  const {
    title,
    images,
    description,
    servings,
    prepTime,
    cookTime,
    ingredients,
    directions,
  } = recipe;

  return (
    <div>
      <h2 className="my-10 text-center font-secondary text-primary text-3xl tracking-wide">
        {title}
      </h2>
      <RecipeImg title={title} images={images} />
      <p className="my-4 text-center font-primary font-bold text-gray-700">
        {description}
      </p>
      <RecipeDetails
        servings={servings}
        prepTime={prepTime}
        cookTime={cookTime}
      />
      <RecipeIngredients ingredients={ingredients} specials={specials} />
      <RecipeInstructions directions={directions} />
    </div>
  );
};
export default RecipesContainer;
