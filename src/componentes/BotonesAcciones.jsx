import React from 'react';
import '../estilos/estilos.css';

const BotonesAcciones = ({ mostrar, toggleMostrar, contrasena, setContrasena, setContrasenaGenerada }) => {
  const copiar = async () => {
    await navigator.clipboard.writeText(contrasena);
    alert("¡Contraseña copiada!");
  };

  const generarContrasena = () => {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let resultado = "";
    while (true) {
      resultado = Array.from({ length: 12 }, () => caracteres[Math.floor(Math.random() * caracteres.length)]).join('');
      if (
        /[a-z]/.test(resultado) &&
        /[A-Z]/.test(resultado) &&
        /[^a-zA-Z0-9]/.test(resultado) &&
        (resultado.match(/\d/g) || []).length >= 2 &&
        !/(\d)\1\1/.test(resultado)
      ) break;
    }
    setContrasena(resultado);
    setContrasenaGenerada(resultado);
  };

  return (
    <div className="botones">
      <button onClick={toggleMostrar}>{mostrar ? 'Ocultar' : 'Mostrar'}</button>
      <button onClick={copiar}>Copiar</button>
      <button onClick={generarContrasena}>Generar Contraseña</button>
    </div>
  );
};

export default BotonesAcciones;