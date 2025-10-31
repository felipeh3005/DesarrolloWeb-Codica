//Implementa la función takeOldest(), la cual recibe una lista de usuarios y devuelve a los más mayores. La cantidad de usuarios a devolver se especifica como segundo parámetro, el cual por defecto es uno. Exporta esta función por defecto.
//
//Ejemplo de uso
//const users = [
//    { name: 'Tirion', birthday: 'Nov 19, 1988' },
//    { name: 'Sam', birthday: 'Nov 22, 1999' },
//    { name: 'Rob', birthday: 'Jan 11, 1975' },
//    { name: 'Sansa', birthday: 'Mar 20, 2001' },
//    { name: 'Tisha', birthday: 'Feb 27, 1992' },
//    { name: 'Chris', birthday: 'Dec 25, 1995' },
//];

//takeOldest(users);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];
//Consulta otros ejemplos en el módulo de pruebas.

//Consejos
//Para convertir fechas a un formato unificado, unixtimestamp, utiliza el método Date.parse()
//En este ejercicio, el formato de fecha utilizado es RFC2822.
//sortBy
//Piensa en qué representa esta función: ¿una orden o una solicitud?

import _ from 'lodash';

const takeOldest = (users, n = 1) => {
  const sorted = _.sortBy(users, (user) => Date.parse(user.birthday));

  return sorted.slice(0, n);
};

export default takeOldest;