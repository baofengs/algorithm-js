import Stack from '../../stack/index';

let stack;
beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
});

afterEach(() => {
    stack.empty();
    stack = null;
});

test('push 3 into stack', () => {
    stack.push(3);
    expect(stack.items).toEqual([1, 2, 3]);
});

test('pop from stack', () => {
    const popped = stack.pop();
    expect(popped).toBe(2);
    expect(stack.items).toEqual([1]);
    expect(stack.items).not.toContain(2);
});

test('size of stack', () => {
    expect(stack.size()).toBe(2);
    stack.pop();
    expect(stack.size()).toBe(1);
});

test('empty stack', () => {
    stack.empty();
    expect(stack.items).toEqual([]);
    expect(stack.size()).toBe(0);
});

test('stack is empty', () => {
    expect(stack.isEmpty()).toBe(false);
    stack.empty();
    expect(stack.isEmpty()).toBe(true);
});
