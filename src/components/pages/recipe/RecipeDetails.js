import PropTypes from "prop-types";

import RecipeDetail from "./RecipeDetail";
import { People, Preparation, Cooking } from "../../Icons";

const RecipeDetails = ({ servings, prepTime, cookTime }) => {
  const iconClass = "mx-1.5 text-xl text-secondary";

  const icons = [
    {
      type: "Servings",
      jsx: <People className={iconClass} />,
      value: servings,
    },
    {
      type: "Prep Time",
      jsx: <Preparation className={iconClass} />,
      value: prepTime,
    },
    {
      type: "Cook Time",
      jsx: <Cooking className={iconClass} />,
      value: cookTime,
    },
  ];

  return (
    <div className="flex justify-center flex-col sm:flex-row">
      {icons.length > 0 &&
        icons.map((icon) => <RecipeDetail key={icon.type} icon={icon} />)}
    </div>
  );
};

RecipeDetails.propTypes = {
  servings: PropTypes.number,
  prepTime: PropTypes.number,
  cookTime: PropTypes.number,
};

export default RecipeDetails;
