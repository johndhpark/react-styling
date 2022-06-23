import "./Button.css";
import PropTypes from "prop-types";

function Button({ type, children }) {
  const renderButton = (buttonType) => {
    switch (buttonType) {
      case "button":
        return (
          <button type="button" className="button">
            {children}
          </button>
        );
      case "reset":
        return (
          <button type="reset" className="button">
            {children}
          </button>
        );
      default:
        return (
          <button type="submit" className="button">
            {children}
          </button>
        );
    }
  };

  return renderButton(type);
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
};

Button.defaultProps = {
  type: "submit",
};

export default Button;
