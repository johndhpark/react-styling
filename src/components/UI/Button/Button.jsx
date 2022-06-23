import PropTypes from "prop-types";
import styles from "./Button.module.css";
// import styled from "styled-components";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgb(0 0 0 / 26%);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgb(0 0 0 / 26%);
//   }
// `;

function Button({ type, children }) {
  const renderButton = (buttonType) => {
    switch (buttonType) {
      case "button":
        return (
          <button type="button" className={styles.button}>
            {children}
          </button>
        );
      case "reset":
        return (
          <button type="reset" className={styles.button}>
            {children}
          </button>
        );
      default:
        return (
          <button type="submit" className={styles.button}>
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
