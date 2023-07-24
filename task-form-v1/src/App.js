import "./styles.css";
import React, { useState } from "react";
import TaskList from "./UI/utils/TaskList";
import TaskForm from "./UI/utils/TaskForm";
import MySelect from "./UI/select/MySelect";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Example task one",
      text: "Example text one: aaaaaaaaaaaaaaa"
    },
    {
      id: "2",
      title: "Example task two",
      text: "Example text two: bbbbbbbbbbbbbbb"
    },
    {
      id: "3",
      title: "Example task three",
      text: "Example text three: cccccccccccccc"
    },
    {
      id: "4",
      title: "Example task four",
      text: "Example text one: ddddddddddddddd"
    },
    {
      id: "5",
      title: "Example task five",
      text: "Example text one: eeeeeeeeeeeeeee"
    }
  ]);
  const [title, setTitle] = useState("Task list");
  const [selected, setSelected] = useState("");

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };
  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const sortTasks = (sort) => {
    setSelected(sort);
    setTasks([...tasks].sort((a, b) => a[sort].localeCompare(b[sort])));
  };
  return (
    <div className="App">
      <div className="container">
        <div className="window">
          <h2 className="start-text">Task form </h2>
          <TaskForm changeTitle={changeTitle} createTask={createTask} />
          <MySelect
            value={selected}
            onChange={sortTasks}
            defaultValue="sort by:"
            options={[
              { value: "title", name: "by name" },
              { value: "text", name: "by description" }
            ]}
          />
          <h2 className="list-title">{title}</h2>
          <hr style={{ color: "#3498db" }} />
          {tasks.length !== 0 ? (
            <TaskList deleteTask={deleteTask} tasks={tasks} />
          ) : (
            <h2 style={{ color: "black" }}>None tasks</h2>
          )}
        </div>
      </div>
    </div>
  );
}
