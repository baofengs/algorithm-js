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
