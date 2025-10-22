//contador en retroceso de numeros//
const printNumbers = (initialNumber) => {
  // BEGIN (write your solution here)
    while (initialNumber >= 1) {
        console.log(initialNumber);
        initialNumber -= 1;
    }
    console.log('¡Empezamos!');
  // END
}