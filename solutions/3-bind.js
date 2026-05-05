// BEGIN
function bind(obj, fn) {
    return function func(...args) {
        return fn.apply(obj, args)
    }
}

export default bind
// END