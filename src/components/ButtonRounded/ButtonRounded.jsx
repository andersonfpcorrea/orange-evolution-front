import PropTypes from "prop-types";
import { HiArrowRight } from "react-icons/hi";

function ButtonRounded({ onClick, type = "button", className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} bg-evolution p-6 rounded-full disabled:bg-evolutionGrey`}
    >
      <HiArrowRight className="h-8 w-8 text-white" />
    </button>
  );
}

ButtonRounded.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ButtonRounded.defaultProps = {
  onClick: () => {},
  className: "",
};

export default ButtonRounded;
