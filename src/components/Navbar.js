import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { logoutSuccess } from "../actions";

function Navbar(props) {
  const logout = () => {
    props.logoutSuccess();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <AssignmentIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
          Todo List
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  logoutSuccess: PropTypes.func
}

const mapDispatchToProps = dispatch => {
  return {
    logoutSuccess: () => dispatch(logoutSuccess())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
