import isBalance from '../../stack/isBalance';

const cases = [
    {
        case: '{{([][])}()}', 
        expect: true
    },
    {
        case: '{1<123>}[{uu}s]', 
        expect: true
    },
    {
        case: '「」',
        expect: true
    },
    {
        case: '[{()]',
        expect: false
    },
    {
        case: '[',
        expect: false
    }
];

cases.map((testCase, index) => {
    test(`case${index+1}: ${testCase.case} is ${testCase.expect ? '' : 'not'} balanced`, () => {
        expect(isBalance(testCase.case)).toBe(testCase.expect);
    });
});
