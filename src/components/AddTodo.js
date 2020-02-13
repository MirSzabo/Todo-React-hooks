import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TodosContext } from "../context/todos.context";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState("");
  const [date, setDate] = useState("");
  //const {addTodo} = useContext(TodosContext);
  return (
    <div>
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
        <form
          onSubmit={event => {
            event.preventDefault();
            addTodo(value, deadline);
            setValue("");
          }}
        >
          <div>
            <TextField
              value={value}
              onChange={event => setValue(event.target.value)}
              type="text"
              margin="normal"
              label="What I need to do"
              fullWidth
            />
          </div>
        </form>
      </Paper>
      <div style={{ display: 'flex', justifyContent: "space-around", alignItems: 'center' }}>
        <DatePicker
          selected={date}
          minDate={new Date()}
          onChange={event => {
            setDate(event);
            setDeadline(event.toLocaleDateString());
          }}
        />

      <Button
        style={{ margin: "2rem" }}
        onClick={() => addTodo(value, deadline)}
        variant="contained"
        color="primary"
      >
        Add todo
      </Button>
      </div>
    </div>
  );
}

export default AddTodo;
