class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

module.exports = LinkedList;