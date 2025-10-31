//Implementa la función interna takeLast(), la cual devuelve los últimos n caracteres de una cadena en orden inverso. La cantidad de caracteres se pasa como segundo parámetro a takeLast(). Si se pasa una cadena vacía o una cadena de longitud menor a la requerida, la función debe devolver null.

//Ejemplos
//run('');       // null
//run('cb');     // null
//run('power');  // rewo
//run('códica'); // acid

const run = (text) => {
  const takeLast = (str, n) => {
    if (str.length === 0 || str.length < n) {
      return null;
    }

    const lastChars = str.slice(-n);

    let reversed = '';
    for (let i = lastChars.length - 1; i >= 0; i--) {
      reversed += lastChars[i];
    }

    return reversed;
  };

  return takeLast(text, 4);
};

export default run;