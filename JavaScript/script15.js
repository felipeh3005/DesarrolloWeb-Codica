// un clásico validador de paréntesis balanceados usando una pila (stack).
// La idea:

// Recorres cada carácter de la cadena.

// Si es un paréntesis de apertura ((, [, {, <), lo guardas en la pila.

// Si es uno de cierre (), ], }, >), verificas que coincida con el último de la pila.

// Si no coincide o la pila está vacía → false.

// Al final, si la pila quedó vacía → true, si no → false.

// Esto funciona así:
// Recorre carácter por carácter.
// Apila aperturas.
// Cuando aparece un cierre, revisa si corresponde al    último abierto.
// Si algo falla, devuelve false de inmediato.
// Al final, devuelve true solo si la pila está vacía.

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

// BEGIN
const isBracketStructureBalanced = (str) => {
  const stack = [];

  for (const char of str) {
    // Si es un símbolo de apertura, lo apilamos
    if (openingSymbols.includes(char)) {
      stack.push(char);
    } else if (closingSymbols.includes(char)) {
      // Buscamos índice del cierre
      const closingIndex = closingSymbols.indexOf(char);
      // Sacamos el último símbolo abierto
      const lastOpen = stack.pop();

      // Comprobamos si coincide con el correspondiente
      if (lastOpen !== openingSymbols[closingIndex]) {
        return false;
      }
    }
  }

  // Si la pila está vacía, está balanceado
  return stack.length === 0;
};
// END

export default isBracketStructureBalanced;
