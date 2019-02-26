function Stack () {
    this.items = [];
}

Stack.prototype.pop = function () {
    return this.items.pop();
}

Stack.prototype.push = function (item) {
    return this.items.push(item);
}

Stack.prototype.size = function () {
    return this.items.length;
}

Stack.prototype.empty = function () {
    this.items.length = 0;
}

Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
}

module.exports = Stack;
export default { Stack };
