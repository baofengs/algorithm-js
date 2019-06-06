import LinkedList from '../../linkedList/linkedList';

describe('LinkedList is empty', () => {
    let l = new LinkedList();
    
    test('LinkedList exists', () => {
        expect(l).not.toBeNull();
    });
    
    test('linkedList.getHead', () => {
        expect(l.getHead()).toBeNull();
    });
    
    test('linkedList.size', () => {
        expect(l.size()).toBe(0);
    });

    test('appped an element', () => {
        l.append(1);
        expect(l.size()).toBe(1);
        expect(l.log()).toBe('1');
        l.removeAll();
    });

});

describe('remove all', () => {
    let ll = new LinkedList();
    ll.append(1);
    ll.append(2);

    test('do remove', () => {
        ll.removeAll();
        expect(ll.getHead()).toBeNull();
        expect(ll.size()).toBe(0);
    });
});

describe('add elements into linkedList', () => {
    let ll = new LinkedList();
    beforeEach(() => {
        ll.append(1);
        ll.append(2);
    });
    afterEach(() => {
        ll.removeAll();
    });

    test('append when linkedList is not empty', () => {
        ll.append(3);
        expect(ll.log()).toBe('1, 2, 3');
    });

    test('insert', () => {
        ll.insert(1, 3);
        expect(ll.size()).toBe(3);
        expect(ll.log()).toBe('1, 3, 2');
    });

    test('indexOf', () => {
        expect(ll.indexOf(1)).toBe(0);
        expect(ll.indexOf(2)).toBe(1);
    });
});
