import React from "react";

const CheckboxInput = ({
  language,
  selectedLenguages,
  addLenguageToSelectedList,
  removeLenguageToSelectedList,
}) => {
  // LAS PROPS NO SE MUTAN, NO SE ALTERAN, NO SE MODIFICAN => SON UNICAMENTE DE LECTURA

  //Calcula si esta seleccinado el lenguaje que viene de la prop
  const isSelected = selectedLenguages.some(
    (selectedLenguage) => selectedLenguage === language.value
  );

  const handleChange = (e) => {
    const isChecked = e.target.checked;

    if (isChecked) addLenguageToSelectedList(language.value);
    else removeLenguageToSelectedList(language.value);
  };

  return (
    <div>
      {/* checked siempre se debe igualar a un booleano */}
      <input
        type="checkbox"
        id={language.id}
        checked={isSelected}
        onChange={handleChange}
      />
      <label htmlFor={language.id}>{language.value}</label>
    </div>
  );
};

export default CheckboxInput;
