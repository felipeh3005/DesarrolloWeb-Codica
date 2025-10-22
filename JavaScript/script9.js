// BEGIN (write your solution here)// agrega los numeros desde el inicio hasta el fin//
const joinNumbersFromRange = (inicio, fin) => {
    let result = '';
    let i = inicio;

    while (i <= fin) {
        result = result + i;
        i += 1
    }

    return result;
}
// END