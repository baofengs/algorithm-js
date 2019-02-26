import Queue from '../../queue/index';

let queue = new Queue;

test('enqueue 3 into queue', () => {
    queue.enqueue(1);
    const length = queue.items.length;
    expect(length).toBe(1);
    expect(queue.items[length - 1]).toBe(1);
    expect(queue.items).toEqual([1]);
});

test('empty queue', () => {
    queue.empty();
    expect(queue.items.length).toBe(0);
    expect(queue.items).not.toContain(1);
});

describe('queue enqueue & empty accepted: ', () => {
    beforeEach(() => {
        queue = new Queue;
        queue.enqueue(1);
        queue.enqueue(2);
    });

    afterEach(() => {
        queue.empty();
        queue = null;
    });

    test('dequeue from queue', () => {
        const dequeued = queue.dequeue();
        expect(dequeued).toBe(1);
        expect(queue.items).toEqual([2]);
    });

    test('size of queue', () => {
        expect(queue.size()).toBe(2);
    });

    test('queue is empty', () => {
        expect(queue.isEmpty()).toBeFalsy();
        queue.empty();
        expect(queue.isEmpty()).toBeTruthy();
    });
});
