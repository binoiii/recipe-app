import PropTypes from "prop-types";

const RecipeInstructions = ({ directions }) => {
  return (
    <div className="mb-8 mt-4">
      <h3 className="mb-4 text-center font-secondary text-primary text-2xl tracking-wide">
        Instructions
      </h3>
      <div className="mx-auto w-96">
        <ul className="list-decimal list-inside">
          {directions.length > 0 &&
            directions.map((direction) => {
              return (
                <li
                  key={direction.instructions}
                  className="m-4 font-primary font-medium text-medium text-gray-700"
                >
                  {`${direction.instructions}`}
                  <span className="text-secondary text-xs">{` ${
                    (direction.optional && "*optional") || ""
                  }`}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

RecipeInstructions.propType = {
  directions: PropTypes.array,
};

export default RecipeInstructions;
