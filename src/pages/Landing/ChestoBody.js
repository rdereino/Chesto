import React from "react";
import { Link } from "react-router-dom";
import chessFun from "../../img/chessFun.jpg";
import "./style/ChestoBody.css";
class ChestoBody extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <section id="presentacion">
          <div>
            <h1>Unete a la nueva forma de jugar ajedrez.</h1>
            <p>
              Registrate para empezar tu aventura en el fascinante mundo de
              chesto!
            </p>
            <Link to="" className="sign-in-button">
              Registrarse
            </Link>
          </div>
          <div>
            <img src={chessFun} alt="" />
          </div>
        </section>
        <section id="funcionamiento">
          <div>
            <h2 className='section-brand'>¿Como funciona?</h2>
            <p className='section-definition'>
              Chesto es un juego de habilidad basado en la estrategia del
              ajedrez y las cartas coleccionables.
            </p>
          </div>
          <div>
            
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default ChestoBody;
