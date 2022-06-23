import PropTypes from "prop-types";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

function CourseGoalList({ onDeleteItem, items }) {
  return (
    <ul className="goal-list">
      {items.map((goal, index) => (
        <CourseGoalItem
          index={index}
          key={goal.id}
          id={goal.id}
          onDelete={onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
}

CourseGoalList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default CourseGoalList;
