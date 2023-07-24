import React from "react";

const TaskItem = (props) => {
  return (
    <div className="task" key={props.task.id}>
      <h3 className="task-title" style={{ color: "black" }}>
        {props.number}. {props.task.title}
      </h3>
      <p style={{ whiteSpace: "normal" }} className="task-text">
        {props.task.text}
      </p>
      <button className="del-btn" onClick={() => props.deleteTask(props.task)}>
        delete
      </button>
    </div>
  );
};
export default TaskItem;
