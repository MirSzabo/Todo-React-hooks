import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import { sortableContainer } from "react-sortable-hoc";

const TodoListSortable = sortableContainer(({ children }) => (
  <Paper>
    <List>{children}</List>
  </Paper>
));

export default TodoListSortable;
