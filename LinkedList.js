class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if(this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.length++;
    }

    removeTail() {
        const currentTail = this.at(this.length - 2);
        if (currentTail == null) return null;

        currentTail.next = currentTail.next.next;
        this.length--;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }

    removeHead() {
        this.head = this.head.next;
        this.length--;
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    tail() {
        let currentTail = this.at(this.length - 1);
        return currentTail;
    }

    at(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current; 
    }

    contains(value) {
        let current = this.head;

        while (current != null) {
            if (current.value == value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let current = this.head;

        while (current != null) {
            if (current.value == value) {
                return index;
            }
            index++;
            current = current.next;
        }

        return null;
    }

    toString() {
        let output = '';
        let current = this.head;
        while (current) {
            output = `${output}( ${current.value} ) -> `;
            current = current.next;
        }
        console.log(`${output}null`);
    }

    insertAt(index, value) {
        if (index === 0) return this.prepend(value);

        //get value before the index
        const prev = this.at(index - 1);
        if (prev == null) return null;

        prev.next = new Node(value, prev.next);
        this.length++;
    }

    removeAt(index) {
        if (index === 0) return this.removeHead();

        //get value before the index
        const prev = this.at(index - 1);
        if (prev == null) return null;

        prev.next = prev.next.next;
        this.length--;
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

//HELPER FUNC NOT TO BREAK THE TESTS
LinkedList.fromValues = function(...values) {
    const ll = new LinkedList();

    //loop in reverse, so the last item will be the first on the list
    for (let i = values.length -1; i >= 0; i--) {
        ll.prepend(values[i]);
    }
    return ll;
}

module.exports = LinkedList;