//Implementa y exporta por defecto una función que tome como entrada un array de billeteras con dinero y el nombre de una moneda, y devuelva la suma de dinero de la moneda especificada.
//Parámetros de la función:
//Un array que contiene billetes de diferentes monedas con diferentes denominaciones.
//El nombre de la moneda.
//Implementa esta función utilizando instrucciones de control:

//const money1 = [
//  'eur 10', 'usd 1', 'usd 10', 'cop 50', 'usd 5',
//];
//getTotalAmount(money1, 'usd') // 16

//const money2 = [
//  'eur 10', 'usd 1', 'eur 5', 'cop 100', 'eur 20', 'eur 100', 'cop 200',
//];
//getTotalAmount(money2, 'eur') // 135

//const money3 = [
//  'eur 10', 'cop 50', 'eur 5', 'cop 10', 'cop 10', 'eur 100', 'cop 200',
//];
//getTotalAmount(money3, 'cop') // 270
//Consejos
//Los nombres de las monedas constan de tres caracteres.
//Utiliza Number() para convertir una cadena en un número.
//Utiliza el método slice() para extraer una subcadena de una cadena.
//const str = 'some text';
//str.slice(1, 6); // 'ome t'
//str.slice(7);    // 'xt'

// BEGIN (write your solution here)
const getTotalAmount = (wallet, currency) => {
    let total = 0;

    for (const bill of wallet) {
        const billCurrency = bill.slice(0, 3);
        const billValue = Number(bill.slice(4));

        if (billCurrency === currency) {
            total += billValue;
        }
    }

    return total;
};

export default getTotalAmount;
// END