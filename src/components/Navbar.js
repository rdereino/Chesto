import React from "react";
import { Link } from "react-router-dom";
import "./style/Navbar.css";
class Navbar extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar">
        <Link className="brand" to="/">
          Chesto
        </Link>

        <ul className="list-items">
          <li>
            <Link className="" to="">
              Nosotros
            </Link>
          </li>
          <li>
            <Link className="" to="">
              Juego
            </Link>
          </li>
          <li>
            <Link className="" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="" to="/faq">
              FAQ
            </Link>
          </li>
        </ul>
        <Link className="brand" to="">
          Login
        </Link>
      </nav>
    );
  }
}
export default Navbar;
