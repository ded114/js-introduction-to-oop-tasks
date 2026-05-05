// BEGIN
class Rational {
    constructor(numer, denom) {
        this.numer = numer
        this.denom = denom
    }
    setNumer(val) {
        this.numer = val
    }
    setDenom(val) {
        this.denom = val
    }
    getNumer() {
        return this.numer
    }
    getDenom() {
        return this.denom
    }
    toString() {
        return `${this.numer}/${this.denom}`
    }
    add(otherRation) {
        const a = this.numer
        const b = this.denom

        const c = otherRation.numer
        const d = otherRation.denom

        const newNumer = a * d + b * c
        const newDenom = b * d
        return new Rational(newNumer, newDenom)
    }
}

function make(numer, denom) {
    return new Rational(numer, denom)
}

export default make
// END