import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="tasks-list">
      {tasks.map((task, number) => (
        <TaskItem deleteTask={deleteTask} number={number + 1} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
