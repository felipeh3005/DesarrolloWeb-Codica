// BEGIN (write your solution here)
const normalizeUrl = web => {
    if (web.startsWith('https://')) {
        return web;
    } else {
        return 'https://' + web;
    }
}
// END

export default normalizeUrl;