import React from "react";
import TodoApp from "./components/TodoApp";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import "./index.css";

function App() {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "94px" }}>
        <Toolbar>
          <Typography component={"div"} color="inherit">
            <Header />
            <Counter />
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoApp />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
