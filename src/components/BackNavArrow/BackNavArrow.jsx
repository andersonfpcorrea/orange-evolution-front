import PropTypes from "prop-types";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function BackNavArrow({ className }) {
  const navigate = useNavigate();
  return (
    <button
      className={`${className} absolute p-1 transition-all cursor-pointer -translate-y-[135%] min-[960px]:-translate-x-full min-[960px]:-translate-y-[200%]
      hover:bg-evolutionIce hover:rounded-full hover:shadow-lg`}
      onClick={() => navigate(-1)}
    >
      <MdKeyboardBackspace className="w-6 h-6" />
    </button>
  );
}

BackNavArrow.propTypes = {
  className: PropTypes.string,
};

BackNavArrow.defaultProps = {
  className: "",
};

export default BackNavArrow;
