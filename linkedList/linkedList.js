const LinkedList = function () {
    const Node = function (element) {
        this.element = element;
        this.next = null;
    }

    let head = null;
    let current;
    let length = 0;

    /**
     * 在链表末尾加入元素
     */
    this.append = function (element) {
        const node = new Node(element);
        if (!head) {
            // 空链
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    /**
     * 移除指定位置元素
     */
    this.removeAt = function (position) {
        //  position 是否合法
        if (position > -1 && position < length) {
            let previous;
            let index = 0;
            if (position === 0) {
                head = head.next;
            } else {
                current = head;
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
            length--;
        }
    }

    /**
     * 在指定位置加入元素
     */
    this.insert = function (position, element) {
        if (position > -1 && position < length) {
            const node = new Node(element);
            let previous;
            let index = 0;
            if (position === 0) {
                node.next = head;
                head = node;
            } else {
                current = head;
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
        }
    }

    /**
     * 链表中是否含有某个元素，如果有的话返回位置，没有返回 -1
     */
    this.indexOf = function (element) {
        let index = 0;
        current = head;
        while (index < length) {
            if (current.element === element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    /**
     * 移除某个元素
     */
    this.remove = function (element) {
        const position = this.indexOf(element);
        this.removeAt(position);
    }

    /**
     * 移除所有元素
     */
    this.removeAll = function () {
        current = head;
        while (head.next) {
            current = head.next;
            current.next = null;
            current.element = undefined;
            head = head.next;
        }
        head = null;
        length = 0;
    }

    /**
     * 获取大小
     */
    this.size = function () {
        return length;
    }

    /**
     * 获取最开头的链表
     */
    this.getHead = function () {
        return head;
    }

    /**
     * 是否为空
     */
    this.isEmpty = function () {
        return length === 0;
    }

    /**
     * 打印链表元素
     */
    this.log = function () {
        current = head;
        let str = [current.element];
        while (current.next) {
            current = current.next;
            str.push(current.element);
        }
        return str.join(', ');
    }
}

module.exports = LinkedList;
export default {LinkedList};
