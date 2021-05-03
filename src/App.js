import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AddRecipe from "./components/pages/addRecipe/AddRecipe";
import EditRecipe from "./components/EditRecipe";
import RecipeContainer from "./components/pages/recipe/RecipeContainer";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addrecipe">
              <AddRecipe />
            </Route>
            <Route path="/editrecipe">
              <EditRecipe />
            </Route>
            <Route path="/recipe/:id">
              <RecipeContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
