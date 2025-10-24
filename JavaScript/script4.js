// BEGIN (write your solution here)
const normalizeUrl = (web) => {
  if (web.startsWith('https://')) {
    return web;
  }
  return `https://${web}`;
};
// END

export default normalizeUrl;
