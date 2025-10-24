// Implementa y exporta por defecto una función que tome dos arrays ordenados y encuentre su intersección. La intersección de dos arrays A y B es un array que contiene solo los elementos que pertenecen a ambos arrays, sin duplicados:

// getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]

// getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]); // []

// getIntersectionOfSortedArrays([], [2]); // []
// Algoritmo
// La búsqueda de la intersección de dos arrays no ordenados es una operación en la que se realiza un bucle anidado con una comprobación completa de cada elemento del primer array para ver si está presente en el segundo.

// La complejidad de este algoritmo es O(n * m) (el producto de n y m), donde n y m son las dimensiones de los arrays. Si los arrays están ordenados, se puede implementar un algoritmo con una complejidad de O(n + m), lo cual es mucho mejor.

// La idea del algoritmo es bastante simple. En el código, se introducen dos punteros (índices) para cada uno de los arrays. El valor inicial de cada puntero es 0. Luego se comprueban los elementos que se encuentran bajo estos índices en ambos arrays. Si coinciden, el valor se agrega al array resultante y ambos índices se incrementan. Si el valor en el primer array es mayor que en el segundo, se incrementa el puntero del segundo array, de lo contrario, se incrementa el del primer array.

// BEGIN (write your solution here)
const getIntersectionOfSortedArrays = (array1, array2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] === array2[j]) {
      if (!result.includes(array1[i])) {
        result.push(array1[i]);
      }
      i += 1;
      j += 1;
    } else if (array1[i] < array2[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return result;
};

export default getIntersectionOfSortedArrays;
// END
