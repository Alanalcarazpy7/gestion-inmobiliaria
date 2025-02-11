import Propiedades from "../components/Propiedades";
import "./tiposDePropiedades.css";
import iconVilla from "../assets/img/icon-villa.png";
import iconHome from "../assets/img/icon-house.png";
import iconOffice from "../assets/img/icon-housing.png";
import iconBuilding from "../assets/img/icon-building.png";
import iconCondominium from "../assets/img/icon-condominium.png";
import apartamentoImg from "../assets/img/icon-apartment.png";
import Filter from "../components/Filter";

const propiedades = [
  {
    id: 1,
    title: "Apartamento",
    cantPropiedades: "123 Propiedades",
    img: apartamentoImg,
  },
  {
    id: 2,
    title: "Villa",
    cantPropiedades: "123 Propiedades",
    img: iconVilla,
  },
  {
    id: 3,
    title: "Casa",
    cantPropiedades: "123 Propiedades",
    img: iconHome,
  },
  {
    id: 4,
    title: "Oficina",
    cantPropiedades: "123 Propiedades",
    img: iconOffice,
  },
  {
    id: 5,
    title: "Edificio",
    cantPropiedades: "123 Propiedades",
    img: iconBuilding,
  },
  {
    id: 6,
    title: "Tiendas",
    cantPropiedades: "123 Propiedades",
    img: iconCondominium,
  },
];

const TiposdePropiedades = () => {
  
  return (
    <div className="property-types" id="tipo-propiedades">
      <Filter />
      <h2>Tipos de Propiedades</h2>
      <p>
        Descubre una variedad de propiedades diseñadas para adaptarse a tus
        necesidades. Desde modernos apartamentos hasta amplias casas familiares,
        encuentra el lugar perfecto para ti.
      </p>

      <div className="propiedades-container">
        {propiedades.map((item) => (
          <div key={item.id}>
            <Propiedades
              img={item.img}
              title={item.title}
              cantPropiedades={item.cantPropiedades}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiposdePropiedades;
