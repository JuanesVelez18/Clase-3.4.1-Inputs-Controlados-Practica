import "./App.css";
import CheckboxControlledInputs from "./components/CheckboxControlledInputs";
import TextControledInput from "./components/TextControledInput";

const languages = [
  {
    id: "7df414e4-cff5-4f4d-9f02-b0f183d0f0a4",
    value: "python",
  },
  {
    id: "792934a9-8c26-4096-91d3-663f9a30f642",
    value: "java",
  },
  {
    id: "415b760f-0988-4bcf-be55-e28535e3bd30",
    value: "kotlin",
  },
  {
    id: "5cc35243-af4d-43c7-8602-3ea8e4fd1016",
    value: "go",
  },
  {
    id: "e293ae96-ed50-4bb4-84cc-a720e925b108",
    value: "rust",
  },
  {
    id: "df44d3fb-23dc-4763-9d0d-e6fa54ac3675",
    value: "php",
  },
];

function App() {
  /* Inputs No Controlados: son inputs donde su valor no hace parte del estado de nuestra aplicación.
  // Ejemplo:
    - Cuando solo capturo el valor final/en el submit
    - debo mas ejemplos
  */

  /* Inputs Controlados: son inputs donde su valor hace parte del estado de la aplicación. 
    Ejemplo:
      - Campos de contraseñas
      - Editor en vivo
      - Formularios dinamicos
  */

  return (
    <div className="App">
      <h2>Input Controlado de tipo texto</h2>
      <TextControledInput />
      <br />
      <hr />
      <br />

      <h2>Input Controlado de tipo checkbox</h2>
      <CheckboxControlledInputs languages={languages} />
    </div>
  );
}

export default App;
