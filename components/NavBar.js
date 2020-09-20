import Link from "next/link";
import { connect } from "react-redux";
import React, { Fragment } from "react";

import { logout } from "../redux/actions/user";

function NavBar({ user, logout }) {
  return (
    <navbar className="navbar">
      {user.isLoggedIn ? (
        <Link href="/login">
          <a onClick={logout} className="navbar__item">
            Logout
          </a>
        </Link>
      ) : (
        <Link href="/login">
          <a className="navbar__item">Login</a>
        </Link>
      )}
    </navbar>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
