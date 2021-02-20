import React from "react";
import { Route, Switch } from "react-router-dom";
import ChestoPage from "./ChestoBody";
import ContactBody from "./ContactBody";
import FaqBody from "./FaqBody";
class LandingBody extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ChestoPage}></Route>
        <Route path="/contact" component={ContactBody}></Route>
        <Route path="/faq" component={FaqBody}></Route>
      </Switch>
    );
  }
}
export default LandingBody;
