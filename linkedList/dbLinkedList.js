const DbLinkedList = function () {
    const Node = function (element) {
        this.element = element;
        this.prev = null;
        this.next = null;
    }

    let head = null;
    let tail = null;
    let current, previous;
    let length = 0;

    /**
     * 指定位置插入元素
     */
    this.insert = function (position, element) {
        let index = 0;
        const node = new Node(element);
        if (position > -1 && position <= length) {
            if (position === 0) {                   // 头插
                if (head === null) {
                    head = node;
                    tail = node;
                } else {
                    current = head;
                    head = node;
                    head.next = current;
                    current.prev = head;
                }
            } else if (position === length) {       // 尾插
                current = tail;
                tail = node;
                current.next = tail;
                tail.prev = current;
            } else {                                // 中间插
                current = head;
                while(index < position) {
                    current = current.next;
                    index++;
                }
                previous = current.prev;

                previous.next = node;
                node.next = current;
                
                current.prev = node;
                node.prev = previous;
            }
            length++;
        }
    }

    /**
     * 删除指定位置元素
     */
    this.removeAt = function (position) {
        let index = 0;
        if (position > -1 && position < length) {
            if (position === 0) {                       // 头
                if (length === 1) {
                    head = null;
                    tail = null;
                } else {
                    current = head;
                    head = current.next;
                    head.prev = null;
                }
            } else if (position === length - 1) {       // 尾
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {                                    // 中间
                current = head;
                while (index < position) {
                    current = current.next;
                    index++;
                }
                previous = current.prev;
                const next = current.next;

                previous.next = next;
                next.prev = previous;
            }
            length--;
        }
    }

    /**
     * 打印
     */
    this.log = function () {
        current = head;
        if (!current) return;
        let strArr = [current.element];
        while(current && current.next) {
            current = current.next;
            strArr.push(current.element);
        }
        return strArr.join(', ');
    }
};

const dbl = new DbLinkedList();
dbl.insert(0, 1);
dbl.insert(0, 2);
console.log(dbl.log());
dbl.removeAt(1);
console.log(dbl.log());
dbl.insert(2, 3);
console.log(dbl.log());
dbl.insert(1, 4);
console.log(dbl.log());
dbl.insert(1, 5);
console.log(dbl.log());
dbl.insert(1, 6);
console.log(dbl.log());
dbl.removeAt(1);
console.log(dbl.log());
dbl.removeAt(1);
console.log(dbl.log());
dbl.removeAt(1);
console.log(dbl.log());
dbl.removeAt(0);
console.log(dbl.log());
