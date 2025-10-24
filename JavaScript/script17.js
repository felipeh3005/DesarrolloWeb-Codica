// En muchos mapas, como Google Maps, se implementa la búsqueda de lugares cercanos a un punto seleccionado, por ejemplo, la ubicación actual. En esta tarea, implementaremos una tarea similar en una versión muy simplificada.

// location.js
// Implementa y exporta la función getTheNearestLocation(), que encuentra el lugar más cercano al punto especificado en el mapa y lo devuelve. Los parámetros de la función son:

// locations - una lista de lugares en el mapa (array). Cada lugar es un array de dos elementos:
// El primer elemento es el nombre del lugar.
// El segundo elemento es el punto en el mapa (un array de dos números de coordenadas x e y).
// point - el punto actual en el mapa.
// import { getTheNearestLocation } from '../location.js';

// const locations = [
// ['Parque', [10, 5]],
// ['Mar', [1, 3]],
// ['Museo', [8, 4]],
// ];

// const puntoActual = [5, 5];

// Si no hay lugares, devuelve null
// getTheNearestLocation([], puntoActual); // null

// getTheNearestLocation(locations, puntoActual); // ['Museo', [8, 4]]
// No es necesario utilizar la desestructuración para resolver este problema, pero queremos practicarla. Por lo tanto, resuelve este problema sin acceder a los índices de los arrays.

// Consejo
// La distancia entre dos puntos se calcula utilizando la función getDistance().

/* eslint-disable import/prefer-default-export */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

// BEGIN (write your solution here)
const getTheNearestLocation = (locations, point) => {
  if (locations.length === 0) {
    return null;
  }

  let nearest = null;
  let minDistance = Infinity;

  for (const [name, coords] of locations) {
    const distance = getDistance(coords, point);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = [name, coords];
    }
  }

  return nearest;
};

export { getTheNearestLocation };
// END
