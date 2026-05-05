// BEGIN
function magic(...args) {
    let sum1 = 0
    if (args.length === 0) { return sum1 }
    sum1 = args.reduce((sum, number) => sum + number, 0)
    function fn(...args) {
        let sum2 = 0
        if (args.length === 0) {return sum2}
        sum2 = args.reduce((sum, number) => sum + number, 0)
        return magic(sum1 + sum2)
    }
    fn.valueOf = () => sum1
    return fn
}

export default magic
// END
