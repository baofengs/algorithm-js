import Queue from './index';

function PriorityQueue () {
    Queue.apply(this);
}

PriorityQueue.prototype = Object.create(Queue.prototype);

PriorityQueue.prototype.enqueue = function (item, level) {
    if (this.isEmpty()) {
        this.items.push({item, level});
    } else {
        let added = false;
        for (let i = 0; i < this.size(); i++) {
            if (level < this.items[i].level) {
                this.items.splice(i, 0, {item , level});
                added = true;
                break;
            }
        }
        !added && this.items.push({item, level});
    }
}

module.exports = PriorityQueue;
export default { PriorityQueue };
