import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

function CourseInput({ onAddGoal }) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(isValid);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label htmlFor="input-field">Course Goal</label>
        <input id="input-field" type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

CourseInput.propTypes = {
  onAddGoal: PropTypes.func.isRequired,
};

export default CourseInput;
