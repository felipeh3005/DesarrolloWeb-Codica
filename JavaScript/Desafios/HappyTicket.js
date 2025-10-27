// isHappyTicket.js

// BEGIN
const isHappyTicket = (number) => {
  // Convertimos el número a una cadena por si acaso (aunque ya viene como string)
  const str = String(number);

  // Obtenemos la longitud total del número
  const length = str.length;

  // Calculamos el punto medio (mitad de la longitud)
  const half = length / 2;

  // Obtenemos las dos mitades de la cadena
  const firstHalf = str.slice(0, half);
  const secondHalf = str.slice(half);

  // Convertimos cada mitad en una lista de dígitos y sumamos
  const sumDigits = (part) => [...part].reduce((acc, digit) => acc + Number(digit), 0);

  const leftSum = sumDigits(firstHalf);
  const rightSum = sumDigits(secondHalf);

  // Comparamos las dos sumas
  return leftSum === rightSum;
};

export default isHappyTicket;
// END
