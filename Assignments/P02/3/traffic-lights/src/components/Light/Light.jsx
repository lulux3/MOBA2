import PropTypes from "prop-types";
import "./Light.css";

function Light({ color, active }) {
  return (
    <div
      className="light"
      style={{ backgroundColor: color, opacity: active ? 1 : 0.3 }}
    />
  );
}

Light.propTypes = {
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Light;
