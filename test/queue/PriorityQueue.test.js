import PriorityQueue from '../../queue/priorityQueue';

let pQueue;

pQueue = new PriorityQueue();

test('enqueue level 2 item into priority queue', () => {
    pQueue.enqueue('Jack', 2);
    expect(pQueue.items).toEqual([{ item: 'Jack', level: 2 }]);
});

test('enqueue level 1 item into priority queue', () => {
    pQueue.enqueue('Tom', 1);
    expect(pQueue.items).toEqual([{ item: 'Tom', level: 1 }, { item: 'Jack', level: 2 }]);
});

test('enqueue another level 1 item into priority queue', () => {
    pQueue.enqueue('Jim', 1);
    expect(pQueue.items).toEqual([{ item: 'Tom', level: 1 }, { item: 'Jim', level: 1 }, { item: 'Jack', level: 2 }]);
});

test('enqueue another level 2 item into priority queue', () => {
    pQueue.enqueue('Jean', 2);
    expect(pQueue.items).toEqual([{ item: 'Tom', level: 1 }, { item: 'Jim', level: 1 }, { item: 'Jack', level: 2 }, { item: 'Jean', level: 2 }]);
});

test('enqueue no level item into priority queue', () => {
    pQueue.enqueue('Larry');
    expect(pQueue.items).toEqual([{ item: 'Tom', level: 1 }, { item: 'Jim', level: 1 }, { item: 'Jack', level: 2 }, { item: 'Jean', level: 2 }, { item: 'Larry', level: undefined }]);
});

describe('after priority enqueue methods accepted', () => {
    beforeEach(() => {
        pQueue = new PriorityQueue;
        pQueue.enqueue('Jack', 2);
        pQueue.enqueue('Tom', 1);
        pQueue.enqueue('Jim', 1);
    });

    afterEach(() => {
        pQueue.empty();
        pQueue = null;
    });

    test('dequeue from priority queue', () => {
        const dequeued = pQueue.dequeue();
        expect(dequeued).toEqual({item: 'Tom', level: 1});
        expect(pQueue.items).not.toContain(({item: 'Tom', levlel: 1}));
        expect(pQueue.items).toEqual([{item: 'Jim', level: 1}, {item: 'Jack', level: 2}]);
    });

    test('empty priorty queue', () => {
        pQueue.empty();
        expect(pQueue.items.length).toBe(0);
        expect(pQueue.items).toEqual([]);
    });

    test('size of priority queue', () => {
        expect(pQueue.size()).toBe(3);
    });

    test('priority queue is empty', () => {
        pQueue.empty();
        expect(pQueue.isEmpty()).toBeTruthy();
    });
});
