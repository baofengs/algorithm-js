import drumGame from '../../queue/drumGame';

describe('seven people', () => {
    let names = ['Tom', 'Jim', 'Jack', 'Jean', 'Lerry', 'David', 'Anthony'];

    test('the drum game\'s winner', () => {
        expect(drumGame(names, 12)).toBe('Jim');
    });
});

describe('one people', () => {
    let names = ['Tom'];

    test('the drum game\'s winner', () => {
        expect(drumGame(names, 12)).toBe('Tom');
    });
});
