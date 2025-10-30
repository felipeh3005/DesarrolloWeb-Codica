// Función que determina si un número es primo o no
const sayPrimeOrNot = (num) => {
  // Los números menores o iguales a 1 no son primos
  if (num <= 1) {
    console.log('no'); // Imprime "no" si el número no es primo
    return;            // Sale de la función inmediatamente
  }

  // Recorremos desde 2 hasta la raíz cuadrada del número
  // No es necesario comprobar más allá de la raíz cuadrada
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Si el número es divisible por i, entonces no es primo
    if (num % i === 0) {
      console.log('no'); // Imprime "no" y sale de la función
      return;
    }
  }

  // Si el bucle termina sin encontrar divisores, el número es primo
  console.log('sí');
};

// Exportamos la función como valor por defecto del módulo
export default sayPrimeOrNot;
