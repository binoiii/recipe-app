import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import RecipeIcon from "./RecipeIcon";
import { People, Preparation, Cooking } from "../Icons";

const RecipeCard = ({ recipe }) => {
  const {
    uuid,
    title,
    images,
    description,
    servings,
    prepTime,
    cookTime,
  } = recipe;

  let descriptionMod =
    description.length > 39
      ? `${description.substring(0, 37)}...`
      : description;

  const iconClass = "text-lg text-secondary";

  const icons = [
    {
      type: "servings",
      jsx: <People className={iconClass} />,
      value: servings,
    },
    {
      type: "prepTime",
      jsx: <Preparation className={iconClass} />,
      value: prepTime,
    },
    {
      type: "cookTime",
      jsx: <Cooking className={iconClass} />,
      value: cookTime,
    },
  ];

  return (
    <Link to={`/recipe/${uuid}`}>
      <div className="mb-8 mx-8 border border-gray-300 w-96 shadow-md overflow-hidden transition duration-300 ease-out transform hover:-translate-y-2 ">
        <div className="flex">
          <img
            src={`http://localhost:3001${images.small}`}
            alt={title}
            className="w-40 h-32"
          />
          <div className="py-2 px-4 w-full">
            <h3 className="text-center font-primary font-bold text-secondary">
              {title}
            </h3>
            <p className="text-center font-medium text-gray-700">
              {descriptionMod}
            </p>
            <div className="my-2.5 flex justify-center">
              {icons.length > 0 &&
                icons.map((icon) => <RecipeIcon key={icon.type} icon={icon} />)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object,
};

export default RecipeCard;
