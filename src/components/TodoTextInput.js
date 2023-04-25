import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TodoTextInput = (props) => {
  let [state, setState] = useState({
    text: props.text || "",
  });

  let handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      props.onSave(text);
      if (props.newTodo) {
        setState({ text: "" });
      }
    }
  };

  let handleChange = (e) => {
    setState({ text: e.target.value });
  };

  let handleBlur = (e) => {
    if (!props.newTodo) {
      props.onSave(e.target.value);
    }
  };

  return (
    <input
      className={classnames({
        edit: props.editing,
        "new-todo": props.newTodo,
      })}
      type="text"
      placeholder={props.placeholder}
      autoFocus={true}
      value={state.text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool,
};

export default TodoTextInput;
