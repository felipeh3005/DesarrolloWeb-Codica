// Datos del pedido
let producto = 'Chocolate';
let precio = 4500;
let cantidad = 3;
let cliente = 'andrés';

// Procesar datos
let total = precio * cantidad;
let nombreFormateado = cliente.trim().toUpperCase();
let resumen = `🧾 Pedido de ${producto.toUpperCase()} x${cantidad}`;

// Mostrar en consola
console.log(`👋 Hola, ${nombreFormateado}`);
console.log(resumen);
console.log(`💰 Total a pagar: $${total.toFixed(2)} COP`);
console.log('✅ ¡Gracias por tu compra!');