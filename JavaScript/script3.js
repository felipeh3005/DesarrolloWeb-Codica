// Función que calcula el total con descuento
const calcularTotal = (precio, cantidad, descuento = 0) => {
  const subtotal = precio * cantidad;
  return subtotal - descuento;
};

// Función que muestra el mensaje final
const mostrarResumen = (cliente, producto, precio, cantidad, descuento = 0) => {
  const total = calcularTotal(precio, cantidad, descuento);
  const nombreFormateado = cliente.trim().toUpperCase();

  console.log(`👋 Hola, ${nombreFormateado}`);
  console.log(`🛒 Producto: ${producto} x${cantidad}`);
  console.log(`💸 Total con descuento: $${total.toFixed(2)} COP`);
  console.log('✅ ¡Gracias por tu compra!');
};

// Usamos las funciones con distintos valores
mostrarResumen(' lucía ', 'Chocolate', 4500, 2);
mostrarResumen(' Mario ', 'Café', 6000, 1, 1000);
