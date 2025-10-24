for (let i = 0; i <= 5; i++) {
  console.log(i);
}

const esPar = (numero) => numero % 2 === 0;
console.log(esPar(45));

const esPositivo = (numero) => {
  if (numero > 0) {
    return 'es positivo';
  } if (numero === 0) {
    return 'cero';
  }
  return 'es negativo';
};
console.log(esPositivo(0));
