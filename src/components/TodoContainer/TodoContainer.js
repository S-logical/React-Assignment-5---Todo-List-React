import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import "./style.css";

const TodoContainer = ({ todoListValues, setTodoListValues }) => {
  //console.log(todoListValues);
  return (
    <div className="container">
        <h1>To Do List</h1>
      <ul>
        {todoListValues.map((item, index) => {
          return (
            <li key={index} className="list">
              {
                <TodoListItem
                  listItem={item}
                  index={index}
                  todoListValues={todoListValues}
                  setTodoListValues={setTodoListValues}
                />
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoContainer;