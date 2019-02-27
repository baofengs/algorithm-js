Queue
---

> FIFO

```js
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
```

**最小优先队列**

场景：普通用户上医院需要排队挂号, 但是具有 VIP 的用户能'插队'办理业务

思路：继承之前的队列，重写 `enqueue` 方法。在元素插入队列时，遍历队列检测其权限是否比当前元素权限小，如果是，则插入到该元素之前；否则，插入到队列尾部；如果没有权限，插入到队列末尾

```js
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
```

**击鼓传花**

```js
import Queue from './index';

function drumGame (names, frequency) {
    const queue = new Queue;
    for (let i = 0; i < names.length; i++) {
        queue.enqueue(names[i]);
    }

    let loser;
    while (queue.size() > 1) {
        for (let i = 0; i < frequency; i++) {
            // 出入队列，模拟循环队列效果
            queue.enqueue(queue.dequeue());
        }
        loser = queue.dequeue();
        // console.log(`${loser} was out`);
    }
    return queue.dequeue();
}

module.exports = drumGame;
export default { drumGame };
```
