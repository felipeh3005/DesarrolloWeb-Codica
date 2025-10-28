// mplementa y exporta por defecto una función que muestra (console.log) en la terminal los números en el rango desde begin hasta end. En este caso:
//Si el número es divisible exactamente por 3, se muestra la palabra Fizz en su lugar.
//Si el número es divisible exactamente por 5, se muestra la palabra Buzz en su lugar.
//Si el número es divisible exactamente por 3 y por 5, se muestra la palabra FizzBuzz en su lugar.
//En todos los demás casos, se muestra el número en sí.
//La función toma dos parámetros (begin y end), que determinan el inicio y el final del rango (inclusive). Para simplificar, consideramos que estos parámetros son números enteros mayores que cero. Si el rango está vacío (en el caso de que begin > end), la función simplemente no imprime nada. //

const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

export default fizzBuzz;