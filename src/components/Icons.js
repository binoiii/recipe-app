import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { GiKnifeFork, GiCookingPot } from "react-icons/gi";
import { CgMenuBoxed } from "react-icons/cg";
import { RiAddCircleFill, RiKnifeFill } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";

export const Logo = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <GiKnifeFork />
  </IconContext.Provider>
);

Logo.defaultProps = {
  className: "text-white",
};

Logo.propTypes = {
  className: PropTypes.string,
};

export const Recipe = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <CgMenuBoxed />
  </IconContext.Provider>
);

Recipe.defaultProps = {
  className: "text-white",
};

Recipe.propTypes = {
  className: PropTypes.string,
};

export const Add = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <RiAddCircleFill />
  </IconContext.Provider>
);

Add.defaultProps = {
  className: "text-white",
};

Add.propTypes = {
  className: PropTypes.string,
};

export const People = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <BsPersonFill />
  </IconContext.Provider>
);

People.defaultProps = {
  className: "text-white",
};

People.propTypes = {
  className: PropTypes.string,
};

export const Preparation = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <RiKnifeFill />
  </IconContext.Provider>
);

Preparation.defaultProps = {
  className: "text-white",
};

Preparation.propTypes = {
  className: PropTypes.string,
};

export const Cooking = ({ className }) => (
  <IconContext.Provider value={{ className }}>
    <GiCookingPot />
  </IconContext.Provider>
);

Cooking.defaultProps = {
  className: "text-white",
};

Cooking.propTypes = {
  className: PropTypes.string,
};
