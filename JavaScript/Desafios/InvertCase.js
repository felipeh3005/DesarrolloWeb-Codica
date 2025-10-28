//mplementa y exporta por defecto una función que cambie el caso de cada letra en una cadena al opuesto. La función debe devolver el resultado obtenido.
//invertCase('Hello, World!'); // hELLO, wORLD!
//invertCase('I loVe JS');     // i LOvE js

const invertCase = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

export default invertCase;