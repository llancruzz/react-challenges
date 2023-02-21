import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";

// Create your class component ("NavBarSimple"); import and call it in your main App component.
class NavBarSimple extends Component {
// Added a constructor, and set the state for 'message'. Call this state in the span element.
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello, guest!",
      buttonText: "Log in",
    };
  }

  handleclick = () => {
    this.setState(
      (prevState) => ({
        message:
          prevState.message === "Hello, guest!"
            ? "Welcome back, user!"
            : "Hello, guest!",
        buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
      }),
      () => console.log(this.state.message)
    );
  };

  render() {
    return (
    // Add the component parts including an h1, span, and button element.
    // Add an onClick attribute to run the method called "handleClick".
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <div>
          <span>{this.state.message}</span>
          <button onClick={() => this.handleclick()}>
            {this.state.buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default NavBarSimple;
