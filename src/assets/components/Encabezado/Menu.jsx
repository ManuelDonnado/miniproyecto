import React from "react";
import "./Menu.css";

function Menu({ ciudades, handleChange, ciudad, handlesearch }) {
  return (
    <div className="btn-group">
      <button className="btn-city">
        <select
          value={ciudad}
          onChange={handleChange}
          className="city"
          id="city"
        >
          <option value="" selected>
            {" "}
            Selecciona una ciudad
          </option>
          {ciudades.map((ciudad, index) => (
            <option key={index} value={ciudad}>
              {ciudad}
            </option>
          ))}
        </select>
      </button>
      <button id="btn-guest">
        Add guests
        <input type="text" id="guest" />
      </button>
      <button className="btn-ico" onClick={handlesearch}>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default Menu;
