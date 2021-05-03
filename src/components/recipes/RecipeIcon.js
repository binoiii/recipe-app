import PropTypes from "prop-types";

const RecipeIcon = ({ icon }) => {
  const { type, jsx, value } = icon;

  return (
    <div className="mx-1 flex items-center">
      {jsx}
      <p className="font-primary font-medium text-xs text-gray-700">
        {(type === "servings" && value) || `${value} mins`}
      </p>
    </div>
  );
};

RecipeIcon.propTypes = {
  icon: PropTypes.object,
};

export default RecipeIcon;
