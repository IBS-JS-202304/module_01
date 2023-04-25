import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import TodoTextInput from "./TodoTextInput";

const TodoItem = (props) => {
  let [state, setState] = useState({
    editing: false,
  });

  let handleDoubleClick = () => {
    setState({ editing: true });
  };

  let handleSave = (id, text) => {
    if (text.length === 0) {
      props.deleteTodo(id);
    } else {
      props.editTodo(id, text);
    }
    setState({ editing: false });
  };

  let element;
  if (state.editing) {
    element = (
      <TodoTextInput
        text={props.todo.text}
        editing={state.editing}
        onSave={(text) => handleSave(props.todo.id, text)}
      />
    );
  } else {
    element = (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.completeTodo(props.todo.id)}
        />
        <label onDoubleClick={handleDoubleClick}>{props.todo.text}</label>
        <button
          className="destroy"
          onClick={() => props.deleteTodo(props.todo.id)}
        >
          x
        </button>
      </div>
    );
  }

  return (
    <li
      className={classnames({
        completed: props.todo.completed,
        editing: state.editing,
      })}
    >
      {element}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
