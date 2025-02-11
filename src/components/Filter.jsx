import InputChange from "./InputChange";
import "./filter.css";
import InputSelect from "./inputSelect";

const Filter = () => {
  const tipoPropiedad = [
    { id: 1, name: "Propiedad 1", value: "propiedad-1" },
    { id: 2, name: "Propiedad 2", value: "propiedad-2" },
    { id: 3, name: "Propiedad 3", value: "propiedad-3" },
  ];
  const titlePropiedad = "Tipos de Propiedades"
  
  const Ubicacion = [
    { id: 1, name: "Ubicacion 1", value: "ubicacion-1" },
    { id: 2, name: "Ubicacion 2", value: "ubicacion-2" },
    { id: 3, name: "Ubicacion 3", value: "ubicacion-3" },
  ];
  const titleUbicacion= "Ubicacion";

  return (
    <div className="contain-filter">
      <InputChange placeHolder={"Buscar Casas"} />
      <InputSelect options={tipoPropiedad} titulo={titlePropiedad} />
      <InputSelect options={Ubicacion} titulo={titleUbicacion} />
      <input type="submit" id="submit" value="Buscar"/>
    </div>
  );
};

export default Filter;
