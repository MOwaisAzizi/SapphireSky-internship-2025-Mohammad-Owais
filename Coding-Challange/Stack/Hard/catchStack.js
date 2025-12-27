//12-Implement an LRU (Least Recently Used) cache using a stack.
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.stack = [];
        this.map = new Map();
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.removeKey(key);
        } else if (this.stack.length >= this.capacity) {
            let leastRecentlyUsed = this.stack.shift();
            this.map.delete(leastRecentlyUsed);
        }

        this.stack.push(key);
        this.map.set(key, value);
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        let value = this.map.get(key);

        this.moveToTop(key, value);
        return value;
    }

    moveToTop(key, value) {
        this.removeKey(key);
        this.stack.push(key);
        this.map.set(key, value);
    }

    removeKey(key) {
        let index = this.stack.indexOf(key);
        if (index !== -1) {
            this.stack.splice(index, 1);
        }
    }
}

// Test
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // -1
cache.put(4, 4);
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
