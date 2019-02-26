## 栈

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

**问题1：二进制转十进制**

```txt
6 除以 2 = 3 ... 0
3 除以 2 = 1 ... 1
1 除以 2 = 0 ... 1    
---
110
测试用例: 6 => 110
```

```js
import Stack from './index';

function decimalToBinary (decimal) {
    let tmpDecimal = decimal;
    const stackDb = new Stack();
    while (tmpDecimal) {
        stackDb.push(tmpDecimal % 2);
        tmpDecimal = Math.floor(tmpDecimal / 2);
    }

    let binaryStr = '';
    while (!stackDb.isEmpty()) {
        binaryStr += stackDb.pop();
    }

    return binaryStr;
}

module.exports = decimalToBinary;
export default { decimalToBinary };
```

**问题2：括号匹配**

思路：遍历待匹配字符串，遇到左括号入栈，遇到右括号出栈，检测出栈括号与当前括号是否匹配；如果括号匹配，则标志置为 `true`，反之为 `false`，返回最终的标志

```js
import Stack from './index';

function isBalance (symbols) {
    const stack = new Stack;
    const leftBrackets = '<{[(「';
    const rightBrackets = '>}])」';
    let matched = false;
    let popValue;

    const match = (lBracket, rBracket) => {
        return leftBrackets.indexOf(lBracket) === rightBrackets.indexOf(rBracket);
    }

    for (let i = 0; i < symbols.length; i++) {
        const current = symbols[i];
        if (leftBrackets.includes(current)) {
            stack.push(current);
        } else if (rightBrackets.includes(current)) {
            popValue = stack.pop();
            matched = match(popValue, current);
        }
    }

    stack.empty();
    return matched;
}

module.exports = isBalance;
export default { isBalance };
```
