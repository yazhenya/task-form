import React, { useState } from "react";
import MyBtn from "../Button/MyBtn";
import MyInput from "../Input/MyInput";

const TaskForm = ({ createTask, changeTitle }) => {
  const [task, setTask] = useState({ title: "", text: "" });
  const [title, setTitle] = useState("Task list");
  const addNewTask = (event) => {
    event.preventDefault();
    const newTask = {
      ...task,
      id: Date.now()
    };
    createTask(newTask);
    setTask({ title: "", text: "" });
  };
  const change = (event) => {
    event.preventDefault();
    changeTitle(title);
  };
  return (
    <form className="control">
      <MyInput
        placeholder="change your list title"
        onChange={(event) => setTitle(event.target.value)}
      />{" "}
      <MyBtn onClick={change}>change List</MyBtn>
      <p>
        <MyInput
          value={task.title}
          onChange={(event) => setTask({ ...task, title: event.target.value })}
          placeholder="enter your title task"
        />
        <MyInput
          value={task.text}
          onChange={(event) => setTask({ ...task, text: event.target.value })}
          placeholder="enter your text task"
        />
      </p>
      <p>
        <MyBtn type="submit" onClick={addNewTask}>
          Add task
        </MyBtn>
      </p>
    </form>
  );
};
export default TaskForm;
