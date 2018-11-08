import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { Grid, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Navbar from "./Navbar";
import Todos from "./Todos";
import AddTodoDialog from "./AddTodoDialog";
import Login from "./Login";

import { showAddTodoDialog } from "../actions";

function App(props) {
  const handleFabClick = () => {
    props.showAddTodoDialog();
  };

  if (!props.isSignedIn) {
    return <Login />;
  }

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={false} md={3} />
        <Grid item xs={12} md={6}>
          <AddTodoDialog />
          <Todos />
          <Button
            onClick={handleFabClick}
            variant="fab"
            color="primary"
            aria-label="Add"
            style={{ position: "fixed", bottom: 15, right: 15 }}
          >
            <AddIcon />
          </Button>
        </Grid>
        <Grid item xs={false} md={3} />
      </Grid>
    </>
  );
}

App.propTypes = {
  showAddTodoDialog: PropTypes.func,
  isSignedIn: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.todosReducer.isSignedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showAddTodoDialog: () => dispatch(showAddTodoDialog())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
