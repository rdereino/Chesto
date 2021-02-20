import React from "react";
import LandingBody from "./LandingBody";
import Navbar from "../../components/Navbar";

class Landing extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <LandingBody></LandingBody>
      </React.Fragment>
    );
  }
}
export default Landing;
