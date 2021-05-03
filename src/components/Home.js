import RecipesContainer from "./recipes/RecipesContainer";

const Home = () => (
  <div>
    <h1 className="my-10 text-center font-secondary text-primary text-4xl tracking-wide">
      My Recipes
    </h1>
    <RecipesContainer />
  </div>
);

export default Home;
