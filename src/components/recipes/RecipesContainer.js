import axios from "axios";
import { useContext, useEffect } from "react";

import { GET_RECIPES, GET_SPECIALS } from "../../context/actionTypes";
import { GlobalContext } from "../../context/GlobalState";

import RecipeCard from "./RecipeCard";

const RecipesContainer = () => {
  const { dispatch, recipes } = useContext(GlobalContext);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipes = await axios.get("http://localhost:3001/recipes");
        dispatch({
          type: GET_RECIPES,
          payload: recipes.data,
        });
      } catch (err) {
        console.log(err);
      }
    };

    const getSpecials = async () => {
      try {
        const specials = await axios.get("http://localhost:3001/specials");
        dispatch({
          type: GET_SPECIALS,
          payload: specials.data,
        });
      } catch (err) {
        console.log(err);
      }
    };

    getRecipes();
    getSpecials();
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-center">
      {recipes.length > 0 &&
        recipes.map((recipe) => (
          <RecipeCard key={recipe.uuid} recipe={recipe} />
        ))}
    </div>
  );
};

export default RecipesContainer;
