export function evaluarSeguridad(contrasena) {
    if (/(\d)\1\1/.test(contrasena)) return 'Inválida: repite dígitos 3 veces';
  
    const tieneMinusculas = /[a-z]/.test(contrasena);
    const tieneMayusculas = /[A-Z]/.test(contrasena);
    const tieneNumeros = (contrasena.match(/\d/g) || []).length;
    const tieneEspeciales = /[^a-zA-Z0-9]/.test(contrasena);
    const esMismaCategoria = contrasena.match(/^[a-z]+$|^[A-Z]+$|^\d+$/);
  
    if (contrasena.length >= 8 && tieneMinusculas && tieneMayusculas && tieneNumeros >= 2 && tieneEspeciales) {
      return 'Fuertísima';
    } else if (contrasena.length >= 8 && tieneMinusculas && tieneMayusculas && tieneNumeros >= 2) {
      return 'Fuerte';
    } else if (contrasena.length >= 8 && tieneMinusculas && tieneMayusculas) {
      return 'Suficiente';
    } else if (contrasena.length >= 6 && esMismaCategoria) {
      return 'Débil';
    } else {
      return 'Inválida';
    }
  }