import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Grid, TextField, Typography } from "@material-ui/core";

import { auth } from "../firebase";
import { loginSuccess } from "../actions";

function Login(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        props.loginSuccess(user.uid);
      }
    });

    return function() {
      unsubscribe();
    };
  }, []);

  return (
    <Grid container>
      <Grid item xs={false} md={3} />
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <Typography variant="h2" style={{ marginTop: "10vh" }}>
          Log in
        </Typography>
        <TextField
          label="E-mail address"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <div
          style={{
            borderStyle: "dotted",
            bordeColor: "grey",
            borderWidth: 1,
            padding: 10
          }}
        >
          <Typography variant="caption">Default accounts:</Typography>
          <Typography variant="caption">test@test.com test123</Typography>
          <Typography variant="caption">test1@test.com test321</Typography>
        </div>
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          size="large"
        >
          Login
        </Button>
      </Grid>
      <Grid item xs={false} md={3} />
    </Grid>
  );
}

Login.propTypes = {
  loginSuccess: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: user => dispatch(loginSuccess(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
