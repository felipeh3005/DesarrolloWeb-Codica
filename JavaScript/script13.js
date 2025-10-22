// Supón que estás creando una app donde los usuarios deben elegir un nombre para su perfil. Queremos evitar que usen ciertas letras (por ejemplo, ‘x’, ‘z’ o ‘q’). Vamos a escribir una función que revise si un nombre contiene alguna de esas letras prohibidas.

const contieneLetraProhibida = (nombre) => {
    const letrasProhibidas = ['x', 'z', 'q'];
    let i = 0;
    let hayLetraProhibida = false;

    while (i < nombre.length) {
        const letraActual = nombre[i];
        let j = 0;

        while (j < letrasProhibidas.length) {
        if (letraActual === letrasProhibidas[j]) {
            hayLetraProhibida = true;
        }
        j++;
        }

        i++;
    }

    return hayLetraProhibida;
};

console.log(contieneLetraProhibida('Max'));    // true
console.log(contieneLetraProhibida('Mario'));  // false
console.log(contieneLetraProhibida('Luiz'));   // true

//🔁 Recorres una lista con while. Revisas cada letra prohibida una por una, en orden.

//🔍 Dentro de eso, recorres la lista de letras prohibidas. Por cada letra del nombre, revisas si coincide con alguna prohibida.

//⚖️ Comparas con if y ===. Si hay coincidencia, marcas que el nombre tiene una letra inválida.

//📦 Usas una variable para guardar el resultado. hayLetraProhibida se activa si encontramos algo malo.

//🚦 Decides con return al final. La función dice si el nombre pasa la validación o no.