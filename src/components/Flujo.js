import React from 'react';
class Flujo extends React.Component {
state={}
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Flujo</h1>
    )
  }
}
Flujo.Paso=class  extends React.Component {
state={}
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Paso</h1>
    )
  }
}
export  {Flujo.Paso};
export default Flujo;