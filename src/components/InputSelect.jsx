import "./inputSelect.css"

const InputSelect = ({ options, titulo }) => {
  return (
    <div className="contain-select">
      <select name="" id="">
        <option value="" hidden>
          {titulo}
        </option>

        {options.map((item) =>( 
          <option key={item.id} value={item.value} >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect
