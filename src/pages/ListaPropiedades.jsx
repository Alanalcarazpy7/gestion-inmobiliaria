import { useState } from "react";
import ButtonFilter from "../components/ButtonFilter";
import FiltroPropiedades from "../components/FiltroPropiedades";
import "./listaPropiedades.css";
import propiedad1 from "../assets/img/property-1.jpg";
import propiedad2 from "../assets/img/property-2.jpg";
import propiedad3 from "../assets/img/property-3.jpg";
import propiedad4 from "../assets/img/property-4.jpg";
//import propiedad2 from "../assets/img/property-2.jpg";

const propiedades = [
  {
    id: 1,
    nombre: "Golden Urban House For Sell",
    img: propiedad1,
    categoria: "For Sell",
    tipo: "Villa",
    precio: "$12,345",
    direccion: "123 Street, New York, USA",
    area: "100 m2",
    habitaciones: "3 Camas",
    banos: "2 Baños",
  },
  {
    id: 2,
    nombre: "Golden Urban House For Sell",
    img: propiedad2,
    categoria: "For Rent",
    tipo: "Edificio",
    precio: "$12,345",
    direccion: "123 Street, New York, USA",
    area: "100 m2",
    habitaciones: "3 Camas",
    banos: "2 Baños",
  },
  {
    id: 3,
    nombre: "Golden Urban House For Sell",
    img: propiedad3,
    categoria: "For Rent",
    tipo: "Edificio",
    precio: "$12,345",
    direccion: "123 Street, New York, USA",
    area: "100 m2",
    habitaciones: "3 Camas",
    banos: "2 Baños",
  },
  {
    id: 4,
    nombre: "Golden Urban House For Sell",
    img: propiedad4,
    categoria: "For Rent",
    tipo: "Edificio",
    precio: "$12,345",
    direccion: "123 Street, New York, USA",
    area: "100 m2",
    habitaciones: "3 Camas",
    banos: "2 Baños",
  },
];

const ListaPropiedades = () => {
  const [isActive, setIsActive] = useState("All");

  const handleClick = (title) => {
    setIsActive(title);
  };

  const filterPropiedades = () => {
    if (isActive === "All") {
      return propiedades;
    } else if (isActive === "For Sell") {
      const filter = propiedades.filter((item) => item.categoria === isActive);
      return filter;
    } else if (isActive === "For Rent") {
      const filter = propiedades.filter((item) => item.categoria === isActive);
      return filter;
    }
  };

  return (
    <div className="container-list-propiedad" id="lista-propiedades">
      <h2 className="list-propiedad-title">Listas de Propiedades</h2>
      <p>
        Explora nuestra selección de propiedades cuidadosamente elegidas para
        ti. Desde acogedoras casas hasta modernos apartamentos, encuentra el
        lugar ideal que se adapte a tus necesidades y estilo de vida.
      </p>
      <div className="list-button-filter">
        <ButtonFilter
          title="All"
          onClick={handleClick}
          isActive={isActive === "All"}
        />
        <ButtonFilter
          title="For Sell"
          onClick={handleClick}
          isActive={isActive === "For Sell"}
        />
        <ButtonFilter
          title="For Rent"
          onClick={handleClick}
          isActive={isActive === "For Rent"}
        />
      </div>
      <div className="list-filtro-propiedades">
        {filterPropiedades().map((item) => (
          <div key={item.id}>
            <FiltroPropiedades
              nombre={item.nombre}
              direccion={item.direccion}
              categoria={item.categoria}
              img={item.img}
              tipo={item.tipo}
              precio={item.precio}
              area={item.area}
              habitaciones={item.habitaciones}
              banos={item.banos}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaPropiedades;
