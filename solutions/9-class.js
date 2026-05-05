import _ from 'lodash';

// BEGIN
class Cart {
    constructor () {
        this.items = []
    }
    addItem(item, count) {
        this.items.push({item, count})
    }
    getItems() {
        return this.items
    }
    getCost() {
        let cost = 0
        for (let {item, count} of this.items) {
            cost += item.price * count
        }
        return cost
    }
    getCount() {
        let count_ = 0
        for (let {count} of this.items) {
            count_ += count
        }
        return count_
    }
}
export default Cart
// END
