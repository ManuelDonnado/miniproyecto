import React from "react";
import star from "./imagen/star.ico";

function Cards(elem) {
  return (
    <section className="main">
      <div className="card">
        <img
          src={elem.imagen}
          className="card-img-top"
          alt=""
          width="500px"
          height="500px"
        />
        <div className="card-body">
          <div className="card-text">
            <div>
              <h3 className="card-title">
                {elem.superHost ? (
                  <> {<button className="btn-host">SUPER HOST</button>} </>
                ) : (
                  <></>
                )}
                {!elem.beds ? (
                  <> {elem.type} </>
                ) : (
                  <>
                    {" "}
                    {elem.type} . {elem.beds} beds{" "}
                  </>
                )}
              </h3>
            </div>
            <div className="card-text">
              <div>
                {" "}
                <i class="fa-solid fa-star" id="star"></i>
              </div>{" "}
              <div>
                {" "}
                <h3 className="card-rating">{elem.rating}</h3>{" "}
              </div>
            </div>
          </div>

          <p className="card-p">{elem.title}</p>
        </div>
      </div>
    </section>
  );
}

export default Cards;
