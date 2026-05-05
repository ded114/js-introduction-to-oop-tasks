// BEGIN
function Money(value, currency = 'usd') {
    this.value = value
    this.currency = currency
}
Money.prototype.getValue = function getValue() {
    return this.value
}
Money.prototype.getCurrency = function getCurrency() {
    return this.currency
}
Money.prototype.exchangeTo = function exchangeTo(currency) {
    let newMoney = new Money()
    if (currency === this.currency) {
        newMoney.value = this.value
        return newMoney
    }
    if (currency === 'eur') {
        newMoney.value = this.value * 0.7
        newMoney.currency = 'eur'
        return newMoney
    }
    if (currency === 'usd') {
        newMoney.value = this.value * 1.2
        newMoney.currency = 'usd'
        return newMoney
    }
}
Money.prototype.add = function add(money) {
    let newMoney = new Money()
    if (money.currency === this.currency) {
        newMoney.value = this.value + money.value
        newMoney.currency = this.currency
        return newMoney
    }
    const tempMoney = money.exchangeTo(this.currency)
    newMoney.value = this.value + tempMoney.value
    newMoney.currency = this.currency
    return newMoney
}
Money.prototype.format = function format() {
    return this.value.toLocaleString('en-US', {style: 'currency', currency: this.currency})
}

export default Money
// END
