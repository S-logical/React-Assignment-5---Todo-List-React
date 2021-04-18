import React, { useState, useEffect } from "react";
import "./style.css";

const TodoListItem = ({
  listItem,
  index,
  todoListValues,
  setTodoListValues,
}) => {
  const [error, seterror] = useState()
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(listItem);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const saveButton = React.createRef();

  const handleDelete = () => {
    let clonedArr = [...todoListValues];
    clonedArr.splice(index, 1);
    setTodoListValues(clonedArr);
  };

  const changeText = (event) => {
    setCurrentText(event.target.value);
  };

  const handleSave = () => {
    // console.log(currentText.replace(/\s/g,''));
    if (currentText.replace(/\s/g, "") !== "") {
      let clonedArr = [...todoListValues];
      clonedArr[index] = currentText;
      setTodoListValues(clonedArr);
      setIsEditing(false);
    }
  };
  useEffect(() => {
    if (saveButton.current !== null) {
      if (currentText.replace(/\s/g, "") == "") {
        //saveButton.current.disabled = true;
        seterror("This field cannot be empty");
      } else {
        saveButton.current.disabled = false;
      }
    }
  }, [currentText]);

  if (isEditing) {
    return (
      <div className="added-task">
        <textarea
          className="editTask"
          onChange={changeText}
          defaultValue={listItem}
        ></textarea>
        <br />
        <button className="saveTask" onClick={handleSave} ref={saveButton}>
          Save
        </button>
      </div>
    );
  } else {
    return (
      
      <div className="added-task">
        <h4>{error}</h4>
        <div className="todo-items">{listItem}</div>
        <div className="buttons">
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
};

export default TodoListItem;