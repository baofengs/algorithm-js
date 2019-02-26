function Queue () {
    this.items = []
}

Queue.prototype.dequeue = function () {
    return this.items.shift();
};

Queue.prototype.enqueue = function (item) {
    return this.items.push(item);
};

Queue.prototype.size = function () {
    return this.items.length;
};

Queue.prototype.empty = function () {
    this.items.length = 0;
}

Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
}

module.exports = Queue;
export default { Queue };
