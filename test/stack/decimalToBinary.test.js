import decimalToBinary from '../../stack/decimalToBinary';

test('decimal 11 convers to binary is 1011', () => {
    expect(decimalToBinary(11)).toBe('1011');
});

test('decimal 63 convers to binary is 111111', () => {
    expect(decimalToBinary(63)).toBe('111111');
});
