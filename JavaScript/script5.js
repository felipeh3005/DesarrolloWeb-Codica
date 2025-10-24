const reverse = (text) => text.split('').reverse().join(''); // texto en reversa

// BEGIN (write your solution here)
const convertirTexto = (text) => {
  if (text === '') {
    return '';
  } if (text[0] === text[0].toLowerCase()) {
    return reverse(text); '';
  }
  return text;
};
// END
