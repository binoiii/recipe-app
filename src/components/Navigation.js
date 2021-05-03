import { NavLink } from "react-router-dom";

import { Logo, Recipe, Add } from "./Icons";

const Navigation = () => (
  <header>
    <nav className="py-4 px-4 sm:px-12 md:px-20 bg-primary text-white">
      <ul className="flex justify-between items-center">
        <li className="font-secondary tracking-wider">
          <NavLink to="/">
            <div className="flex items-center">
              <Logo className="mr-2 text-xl" />
              <span className="text-2xl">Recipes</span>
            </div>
          </NavLink>
        </li>
        <div className="flex font-primary">
          <li className="ml-4 text-gray-500 font-medium tracking-widest hover:text-white transition duration-300 ease-out">
            <NavLink exact to="/" activeClassName="text-white">
              <div className="flex items-center">
                <Recipe className="mx-0.5 sm:mx-2 text-2xl" />
                <span>Recipes</span>
              </div>
            </NavLink>
          </li>
          <li className="ml-4 text-gray-500 font-medium tracking-widest hover:text-white transition duration-300 ease-out">
            <NavLink to="/addrecipe" activeClassName="text-white">
              <div className="flex items-center">
                <Add className="mx-0.5 sm:mx-2 text-xl" />
                <span>Add Recipe</span>
              </div>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  </header>
);

export default Navigation;
