import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toggle extends Component {
  state = {
    show: false,
  };

  toggle = () =>
    this.setState((currentState) => ({ show: !currentState.show }));

  render() {
    return (
      <div>
        <div>
          <button onClick={this.toggle}>
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div>
          {" "}
          {this.state.show && (
            <div className="absolute p-4 top-100 right-10 shadow rounded bg-white text-black z-10">
                <div className="text-md text-center justify-center">
              <Link to="/" className="block mt-4 lg:inline-block lg:mt-0">
                Forside
              </Link>
              <Link
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0"
              >
                Om mig
              </Link>
            </div>
            </div>
          )}{" "}
        </div>
      </div>
    );
  }
}

export default Toggle;
