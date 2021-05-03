import PropTypes from "prop-types";

const RecipeIngredients = ({ ingredients, specials }) => {
  const upperCaseFirstChar = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const existCheck = (item) => {
    if (typeof item !== "undefined") return item;
    return false;
  };

  return (
    <div className="mb-8 mt-4">
      <h3 className="mb-4 text-center font-secondary text-primary text-2xl tracking-wide">
        Ingredients
      </h3>
      <div className="mx-4 flex justify-center">
        <ul className="list-disc ist-inside">
          {ingredients.length > 0 &&
            ingredients.map((ingredient) => {
              let ingredientNameMod = upperCaseFirstChar(ingredient.name);
              let special =
                specials.length > 0 &&
                specials.find(
                  (special) => special.ingredientId === ingredient.uuid
                );

              special = existCheck(special);

              let type = special && upperCaseFirstChar(special.type);
              let title = special && special.title;
              let text = special && special.text;

              return (
                <div key={ingredient.uuid}>
                  <li className="m-4 font-primary font-medium text-medium text-gray-700">
                    {`${ingredientNameMod} - ${ingredient.amount} ${ingredient.measurement}`}
                  </li>
                  {special && (
                    <div className="-mt-4 w-full text-xs text-secondary">
                      <p>{`${upperCaseFirstChar(type)} | ${title}`}</p>
                      <p className="">{`${text}`}</p>
                    </div>
                  )}
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

RecipeIngredients.propType = {
  ingredients: PropTypes.array,
  specials: PropTypes.array,
};

export default RecipeIngredients;
