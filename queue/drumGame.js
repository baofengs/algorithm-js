import Queue from './index';

function drumGame (names, frequency) {
    const queue = new Queue;
    for (let i = 0; i < names.length; i++) {
        queue.enqueue(names[i]);
    }

    let loser;
    while (queue.size() > 1) {
        for (let i = 0; i < frequency; i++) {
            // 出入队列，模拟循环队列效果
            queue.enqueue(queue.dequeue());
        }
        loser = queue.dequeue();
        // console.log(`${loser} was out`);
    }
    return queue.dequeue();
}

module.exports = drumGame;
export default { drumGame };
