// BEGIN (write your solution here)// contador de numneros presentes en un string, si hay 2 o mas es true, sino false//
const hasEnoughDigits = (password) => {
  let i = 0;
  let count = 0;

  while (i < password.length) {
    if (password[i] >= '0' && password[i] <= '9') {
      count += 1;
    }
    i += 1;
  }

  return count >= 2;
};
// END
