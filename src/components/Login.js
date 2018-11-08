import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { auth } from "../firebase";
import { loginSuccess } from "../actions";

function Login(props) {
  useEffect(() => {
    auth.signInAnonymously();
  }, []);

  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        props.loginSuccess(user);
      }
    });

    return function() {
      unsubscribe();
    };
  }, []);

  return null;
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
