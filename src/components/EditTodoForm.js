import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function EditTodoForm({ id, description, editTodo, editState }) {
  const [value, setValue] = useState(description);
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          editTodo(id, value);
          setValue("");
          editState();
        }}
      >
        <TextField
          margin="normal"
          fullWidth
          style={{ padding: "0.5rem" }}
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          autoFocus
        />
      </form>
    </div>
  );
}

export default EditTodoForm;
