import PropTypes from "prop-types";
import "./CourseGoalItem.css";

function CourseGoalItem({ onDelete, children, id, index }) {
  // const [deleteText, setDeleteText] = useState('');
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li>
      <div
        role="button"
        className="goal-item"
        onClick={deleteHandler}
        onKeyDown={deleteHandler}
        tabIndex={index}
      >
        {children}
      </div>
    </li>
  );
}

export default CourseGoalItem;
