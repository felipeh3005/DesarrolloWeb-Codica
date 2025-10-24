// Imagina que estás programando una app de descuentos. Queremos mostrar un mensaje especial si el usuario:
// Es mayor de 18
// Tiene una cuenta verificada
// Hizo una compra de más de $10.000 o tiene cupón
// Y además queremos personalizar el mensaje con su nombre.

// Función para saber si tiene acceso
const puedeAcceder = (edad, verificado, monto, cupón) => {
  const cumpleCondiciones = edad >= 18 && verificado && (monto > 10000 || cupón === 'PROMO2025');
  return cumpleCondiciones;
};

// Función para mostrar el mensaje final
const mostrarMensaje = (nombre, edad, verificado, monto, cupón) => {
  const nombreLimpio = nombre.trim().toUpperCase();

  if (puedeAcceder(edad, verificado, monto, cupón)) {
    console.log(`🎉 ¡Hola ${nombreLimpio}! Accedes a la promoción especial.`);
  } else {
    console.log(`👋 Hola ${nombreLimpio}. Por ahora no cumples con los requisitos.`);
  }
};

// Casos de prueba
mostrarMensaje(' Lucía ', 25, true, 8000, 'PROMO2025'); // ✅ Con cupón
mostrarMensaje(' Mario ', 16, true, 15000, ''); // ❌ Edad baja
mostrarMensaje(' Elsa ', 30, false, 15000, ''); // ❌ No verificada
