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
