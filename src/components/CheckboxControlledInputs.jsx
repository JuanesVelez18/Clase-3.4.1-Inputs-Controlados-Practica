import React, { useState } from "react";
import CheckboxInput from "./CheckboxInput";

const CheckboxControlledInputs = ({ languages }) => {
  const [selectedLenguages, setSelectedLenguages] = useState([]);

  // Agrega un valor al array de lenguages seleccionados
  const addLenguageToSelectedList = (languageToAdd) => {
    // Clono la variable reactiva
    // const selectedLenguagesClone = JSON.parse(JSON.stringify(selectedLenguages));
    // const selectedLenguagesClone = structuredClone(selectedLenguages);
    const selectedLenguagesClone = [...selectedLenguages];

    // Modifico el clon, en este caso ingresando un nuevo lenguaje
    selectedLenguagesClone.push(languageToAdd);

    // Actualizar la variable de estado siempre y cuando su longitud no sea mayor a 3
    if (selectedLenguagesClone.length <= 3)
      setSelectedLenguages(selectedLenguagesClone);
  };

  // Remover un valor del array de lenguajes seleccionados
  const removeLenguageToSelectedList = (languageToDelete) => {
    //Clonar la variable reactiva
    const selectedLenguagesClone = structuredClone(selectedLenguages);

    // Obtener el indice en el array del lenguaje que se va a eliminar
    const indexOfLenguage = selectedLenguagesClone.findIndex(
      (x) => x === languageToDelete
    );

    // Elimina el lenguaje del clon
    selectedLenguagesClone.splice(indexOfLenguage, 1);

    // Actualizar la variable de estado siempre y cuando no quede vacia la lista
    if (selectedLenguagesClone.length)
      setSelectedLenguages(selectedLenguagesClone);
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      {languages.map((language) => (
        <CheckboxInput
          key={language.id}
          language={language}
          selectedLenguages={selectedLenguages}
          addLenguageToSelectedList={addLenguageToSelectedList}
          removeLenguageToSelectedList={removeLenguageToSelectedList}
        />
      ))}
    </section>
  );
};

export default CheckboxControlledInputs;
