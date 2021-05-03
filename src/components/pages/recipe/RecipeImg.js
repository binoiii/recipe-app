import PropTypes from "prop-types";

const RecipeImg = ({ title, images }) => {
  return (
    <div className="flex justify-center">
      <picture>
        <source
          media="(min-width: 640px)"
          srcSet={`http://localhost:3001${images.medium}`}
        />
        <img src={`http://localhost:3001${images.small}`} alt={title} />
      </picture>
    </div>
  );
};

RecipeImg.propTypes = {
  title: PropTypes.string,
  images: PropTypes.object,
};

export default RecipeImg;
