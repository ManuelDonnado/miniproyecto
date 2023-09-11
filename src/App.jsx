import { useEffect, useState } from "react";
import "./App.css";
import Encabezado from "./assets/components/Encabezado/Encabezado";
import Cards from "./assets/components/Cards/Cards";
import Titulo from "./assets/components/Stay/Titulo";
import Footer from "./assets/components/Footer/Footer";

function App() {
  const [data, setData] = useState([]);
  const [ciudad, setCiudad] = useState("");
  const [busqueda, setBusqueda] = useState([]);
  const ciudades = [
    "Helsinki,Finland",
    "Turku,Finland",
    "Vaasa,Finland",
    "Oulu,Finland ",
  ];
  const [estancia, setEstancia] = useState(Number(14));

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
      setBusqueda(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setCiudad(e.target.value);
  };

  function handlesearch() {
    const inpCity = document.querySelector("#city");
    const inpGuest = document.querySelector("#guest");
    const city = inpCity.value.split(",")[0];
    const guest = inpGuest.value;
    //console.log(city);
    console.log(guest);

    if (!city && !guest) {
      const filtroBusqueda = data;
      setBusqueda(filtroBusqueda);
      console.log(filtroBusqueda);
      setEstancia(filtroBusqueda.length);
    } else if (!guest) {
      const filtroBusqueda = data.filter((element) =>
        element.city.includes(city)
      );
      setBusqueda(filtroBusqueda);
      console.log(filtroBusqueda);
      setEstancia(filtroBusqueda.length);
    } else if (!city) {
      const filtroBusqueda = data.filter(
        (element) => element.maxGuests >= guest
      );
      setBusqueda(filtroBusqueda);
      console.log(filtroBusqueda);
      setEstancia(filtroBusqueda.length);
    } else {
      const filtroBusqueda = data.filter(
        (element) => element.city.includes(city) && element.maxGuests >= guest
      );
      setBusqueda(filtroBusqueda);
      console.log(filtroBusqueda);
      setEstancia(filtroBusqueda.length);
    }
  }

  return (
    <>
      <div>
        <Encabezado
          ciudades={ciudades}
          handleChange={handleChange}
          ciudad={ciudad}
          handlesearch={handlesearch}
        />
      </div>

      <div>
        <Titulo estancia={estancia} />
      </div>

      <div className="contenedor">
        {busqueda.map((elem, index) => (
          <Cards
            key={index}
            city={elem.city}
            imagen={elem.photo}
            title={elem.title}
            rating={elem.rating}
            superHost={elem.superHost}
            type={elem.type}
            beds={elem.beds}
          />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
