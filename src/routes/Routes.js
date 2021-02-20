import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
class Routes extends React.Component {
state={}
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <BrowserRouter>
        <Switch>
            <Route  path='/'  component={Landing}>
            </Route>
        </Switch>
        </BrowserRouter>
    )
  }
}
export default Routes;