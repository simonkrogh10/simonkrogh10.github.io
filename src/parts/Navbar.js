import { Link } from "react-router-dom";
import React, { Component } from "react";
import Toggle from "./Toggle";

class Navbar extends Component {
 
  render() {
    return (
      <nav className="shadow-md">
        <div className="flex items-center justify-between bg-teal p-6 nav-content">
          <img
            className="absolute path-svg hidden 2xl:block"
            src="https://www.datocms-assets.com/42067/1613131843-path-3.svg"
            width="100%"
            alt=""
          />

          <div className="flex items-center flex-no-shrink text-black mr-6">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter font-bold text-2xl mr-4"
            >
              Simon Krogh
            </Link>
          </div>
          <div className="block lg:hidden">
  
          <Toggle />
          </div>
          <div className="w-full md-block hidden lg:flex lg:items-center 2xl:text-white lg:w-auto">
            <div className="text-md justify-center">
              <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 mr-5">
                Forside
              </Link>
              <Link
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0  mr-5"
              >
                Om mig
              </Link>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm px-5 py-2 leading-none border rounded text-black 2xl:text-white 2xl:border-white hover:border-black hover:text-white mt-4 lg:mt-0 transition duration-500 ease-in-out hover:bg-black transform hover:scale-110"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
