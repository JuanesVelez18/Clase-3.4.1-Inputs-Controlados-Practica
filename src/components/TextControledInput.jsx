import React, { useState } from "react";

const TextControledInput = () => {
  const [passwordValue, setPasswordValue] = useState("");

  const passwordHandleChange = (e) => {
    const newValue = e.target.value;

    // No permitir que tenga comas, letras mayusculas ni longitud mayor a 7 caracteres
    if (!/[A-Z,]/.test(newValue) && newValue.length < 8)
      setPasswordValue(newValue);
  };

  return (
    <>
      <input
        type="text"
        value={passwordValue}
        name="password"
        onChange={passwordHandleChange}
      />

      <p>
        Tu contrase es:{" "}
        <mark>
          {!passwordValue
            ? "vacia"
            : passwordValue.length < 8
            ? "debil"
            : "fuerte"}
        </mark>
      </p>
    </>
  );
};

export default TextControledInput;
