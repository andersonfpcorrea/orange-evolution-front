import PropTypes from "prop-types";
import { MdKeyboardBackspace } from "react-icons/md";

function BackNavArrow({ className }) {
  return (
    <div className={`fixed top-[-48px] left-[-42px] ${className}`}>
      <MdKeyboardBackspace style={{ width: "24px", height: "24px" }} />
    </div>
  );
}

BackNavArrow.propTypes = {
  className: PropTypes.string,
};

BackNavArrow.defaultProps = {
  className: "",
};

export default BackNavArrow;
