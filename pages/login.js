import { useState } from "react";
import { connect } from "react-redux";

import { login } from "../redux/actions/user";

function Login({ login, error }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <form noValidate className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="form__input"
        onChange={handleChange}
        value={credentials.username}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="form__input"
        onChange={handleChange}
        value={credentials.password}
      />
      <button type="submit" className="form__button">
        Login
      </button>
      {error.message && <p className="form__error">{error.message}</p>}
    </form>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
