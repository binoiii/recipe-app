import PropTypes from "prop-types";

const RecipeDetail = ({ icon }) => {
  const { type, jsx, value } = icon;

  return (
    <div className="my-4 mx-2 sm:mx-6 md:mx-12 flex flex-col items-center">
      <div className="flex items-center">
        {jsx}
        <span className="text-base sm:text-lg font-primary text-secondary">
          {type}
        </span>
      </div>
      <p className="font-primary font-bold text-gray-700">
        {(type === "Servings" && `${value} persons`) || `${value} mins`}
      </p>
    </div>
  );
};

RecipeDetail.propTypes = {
  icon: PropTypes.object,
};

export default RecipeDetail;
