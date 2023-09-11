import React from "react";
import logo from "./imagenes/logo.png";
import Menu from "./Menu";

function Encabezado({ ciudades, handleChange, ciudad, handlesearch }) {
  return (
    <div className="home">
      <div className="logo-top">
        <img src={logo} alt="logo" />
      </div>

      <div id="Menu-top">
        <Menu
          ciudades={ciudades}
          handleChange={handleChange}
          ciudad={ciudad}
          handlesearch={handlesearch}
        />
      </div>
    </div>
  );
}

export default Encabezado;
