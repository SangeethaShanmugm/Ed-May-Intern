import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div id="brand">Zomato App</div>
        <Link className="btn btn-info" to="/">
          Home
        </Link>
        <div id="social">
          <Link className="btn btn-success" to="/">
            <span className="glyphicon glyphicon-log-in"></span>
            Login
          </Link>
          <Link className="btn btn-danger" to="/">
            <span className="glyphicon glyphicon-user"></span>
            Signup
          </Link>
        </div>
      </header>
    );
  }
}
