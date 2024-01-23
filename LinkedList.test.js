const LinkedList = require('./LinkedList');

describe('#append', () => {
    test('it adds the element to the end of the list', () => {
        const ll = LinkedList.fromValues(10, 20);
        ll.append(30);

        expect(ll.head.next.value).toBe(20);
        expect(ll.length).toBe(3);
    });
});

describe('#removeTail', () => {
    test('it removes the tail', () => {
        const ll = LinkedList.fromValues(10, 20, 30);
        ll.removeTail();

        expect(ll.head.value).toBe(10);
        expect(ll.head.next.value).toBe(20);
        expect(ll.head.next.next).toBeNull();
    });
});

describe('#prepend', () => {
    test('it adds the element to the beginning of the list', () => {
        const ll = LinkedList.fromValues(10);
        const oldHead = ll.head;
        ll.prepend(20)

        expect(ll.head.value).toBe(20);
        expect(ll.head.next).toBe(oldHead);
        expect(ll.length).toBe(2);
    });
});

describe('#removeHead', () => {
    test('it removes the head', () => {
        const ll = LinkedList.fromValues(10, 20, 30);
        ll.removeHead()

        expect(ll.head.value).toBe(20);
        expect(ll.length).toBe(2);
    });
});

describe('#at', () => {
    describe('with index less than 0', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20);

            expect(ll.at(-1)).toBeNull();
        });
    });

    describe('with index greater than list length', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20);

            expect(ll.at(5)).toBeNull();
        });
    });

    describe('with index 0', () => {
        test('it returns the head', () => {
            const ll = LinkedList.fromValues(10, 20);

            expect(ll.at(0).value).toBe(10);
        });
    });

    describe('with index at any point in the list', () => {
        test('it returns the element at that index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);

            expect(ll.at(2).value).toBe(30);
        });
    });
});

describe('#contains', () => {
    test('it returns true if the value is present in the list', () => {
        const ll = LinkedList.fromValues(10, 20, 30, 40);
        ll.contains(30);

        expect(true);
    });

    test('it returns false if the value is not present in the list', () => {
        const ll = LinkedList.fromValues(10, 20, 30, 40);
        ll.contains(50);

        expect(false);
    });
});

describe('#find', () => {
    test('it returns the index of a given value', () => {
        const ll = LinkedList.fromValues(10, 20, 30);
        ll.find(20);

        expect(1);
    });

    test('it returns null if a given value is not present in the list', () => {
        const ll = LinkedList.fromValues(10, 20, 30);
        ll.find(40);

        expect(null); 
    });
})

describe('#insertAt', () => {
    describe('with index less than 0', () => {
        test('it does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20);
            ll.insertAt(-1, 30);

            expect(ll.length).toBe(2);
        });
    });

    describe('with index greater than list length', () => {
        test('it does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20);
            ll.insertAt(5, 30);

            expect(ll.length).toBe(2);
        });
    });

    describe('with index 0', () => {
        test('it should insert at the head', () => {
            const ll = LinkedList.fromValues(10, 20);
            ll.insertAt(0, 30);

            expect(ll.head.value).toBe(30);
            expect(ll.head.next.value).toBe(10);
            expect(ll.length).toBe(3);
        });
    });

    describe('with index at any point in the list', () => {
        test('it should insert at the given index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            ll.insertAt(2, 50);
            const node = ll.at(2)

            expect(node.value).toBe(50);
            expect(node.next.value).toBe(30);
            expect(ll.length).toBe(5);
        });
    });
});

describe('#removeAt', () => {
    describe('with index less than 0', () => {
        test('it does not remove anything', () => {
            const ll = LinkedList.fromValues(10, 20);
            ll.removeAt(-1);

            expect(ll.length).toBe(2);
        });
    });

    describe('with index greater than list length', () => {
        test('it does not remove anything', () => {
            const ll = LinkedList.fromValues(10, 20);
            ll.removeAt(-1);

            expect(ll.length).toBe(2); 
        });
    });

    describe('with index 0', () => {
        test('it should remove the head', () => {
            const ll = LinkedList.fromValues(10, 20, 30);
            ll.removeAt(0);

            expect(ll.head.value).toBe(20);
            expect(ll.head.next.value).toBe(30);
            expect(ll.length).toBe(2);
        });
    });

    describe('with index at any point in the list', () => {
        test('it should remove at the given index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40);
            ll.removeAt(2);
            const node = ll.at(1)

            expect(node.value).toBe(20);
            expect(node.next.value).toBe(40);
            expect(ll.length).toBe(3);
        });
    });
});