import "./carruselTestimonio.css";
//import carrusel from "./carruselTestimonio.js";

const CarruselTestimonio = ({clientes}) => {
  const { nombre, profesion, testimonio, img } = clientes;
  return (
    <div className="testimonio-slider">
      <div className="testimonio-slides">
        <div className="testimonio-slide">
          <p>{testimonio}</p>
          <div className="flex">
            <div>
              <img src={img} alt="" />
            </div>
            <div>
              <h3 className="textimonio-nombre">{nombre}</h3>
              <p className="textimonio-profesion">{profesion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarruselTestimonio;
