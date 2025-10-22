// BEGIN (write your solution here)// Algoritmo de cifrado
//La función recibe un mensaje como texto.
//Recorre la cadena dos letras a la vez.
//Por cada par de caracteres consecutivos, invierte el orden.
//Si la longitud del texto es impar, el último carácter queda tal como está.//
const encrypt = (mensaje) => {
    let result = '';

    for (let i = 0; i < mensaje.length; i += 2) {
        const primer = mensaje[i];
        const segundo = mensaje[i + 1] || '';
        result += segundo + primer;
    }

    return result;
};
// END

export default encrypt;