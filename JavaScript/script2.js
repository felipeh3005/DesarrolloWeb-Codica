// Datos del pedido
const producto = 'Chocolate';
const precio = 4500;
const cantidad = 3;
const cliente = 'andrés';

// Procesar datos
const total = precio * cantidad;
const nombreFormateado = cliente.trim().toUpperCase();
const resumen = `🧾 Pedido de ${producto.toUpperCase()} x${cantidad}`;

// Mostrar en consola
console.log(`👋 Hola, ${nombreFormateado}`);
console.log(resumen);
console.log(`💰 Total a pagar: $${total.toFixed(2)} COP`);
console.log('✅ ¡Gracias por tu compra!');
