// nueva tarea//
// Datos del pedido
const producto = 'Café';
const precio = 6000;
const cantidad = 2;
const total = precio * cantidad;
const cliente = 'Lucía';

// Mostrar saludo personalizado
console.log(`Hola, ${cliente}`);

// Mostrar resumen del pedido
console.log(`Producto: ${producto}`);
console.log(`Cantidad: ${cantidad}`);
console.log(`Total: $${total} COP`);
// Mensaje final
console.log('¡Gracias por tu compra!');

// nueva tarea//
const text = 'Cuando alguien juega al Juego de Tronos, o ganas o mueres.';
// BEGIN (write your solution here)
const extrae = text.slice(7, 21);
const reemplazo = extrae.replace('alguien juega', ' juegas ');
console.log(reemplazo.length);
console.log(reemplazo);
// END
