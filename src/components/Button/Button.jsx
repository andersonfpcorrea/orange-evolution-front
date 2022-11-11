import PropTypes from "prop-types";

function Button({
  text,
  outline = false,
  type = "button",
  onClick,
  className,
}) {
  return (
    <button
      type={type}
      className={`text-xl ${
        outline
          ? "border-evolution border-solid border-[1px] text-evolution"
          : "bg-evolution border-none text-white"
      } rounded-md h-12 w-36 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  outline: false,
  type: "button",
  onClick: () => {},
  className: "",
};

export default Button;
