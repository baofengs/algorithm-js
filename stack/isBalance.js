import Stack from './index';

function isBalance (symbols) {
    const stack = new Stack;
    const left = '<{[(「';
    const right = '>}])」';
    let matched = false;
    let popValue;

    const match = (leftBracket, rightBracket) => {
        return left.indexOf(leftBracket) === right.indexOf(rightBracket);
    }

    for (let i = 0; i < symbols.length; i++) {
        const current = symbols[i];
        if (left.includes(current)) {
            stack.push(current);
        } else if (right.includes(current)) {
            popValue = stack.pop();
            matched = match(popValue, current);
        }
    }
    
    stack.empty();
    return matched;
}

module.exports = isBalance;
export default { isBalance };
