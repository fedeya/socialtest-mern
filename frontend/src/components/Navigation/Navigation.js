import React, { Component } from 'react'
import { Link } from "react-router-dom";
import routes from "./routes";

class Navigation extends Component {
  render() {

    const { isAuth } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">

          <Link className="nav-brand text-decoration-none text-reset h4 my-auto" to="/">SocialTest</Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto d-flex">
              {
                isAuth ? (
                  <React.Fragment>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cuenta
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/profile/">Perfil</Link>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" onClick={this.props.desAuth}>Cerrar Sesion</a>
                      </div>
                    </li>
                  </React.Fragment>
                ) : routes.dontConnected.map((route, index) => (
                  <li className="nav-item" key={index}>
                    <Link to={route.url} className="nav-link">
                      {route.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}

export default Navigation;