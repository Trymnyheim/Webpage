class PrefixTree {
    constructor() {
        this.root = new Node('\0', true);
    }

    search(str) {
        str = str.toLowerCase();
        let node = this.root;
        let result = "";

        for (let i = 0; i < str.length; i++) {
            const c = str[i];
            node = node.findNext(c);

            if (!node) break;
            if (node.isEnd()) result = str.substring(0, i + 1);
        }

        return result;
    }

    insert(str) {
        str = str.toLowerCase();
        let node = this.root;

        for (let i = 0; i < str.length; i++) {
            const c = str[i];
            node = node.addToNext(c, false);
            if (i === str.length - 1) node.setEnd();
        }
    }
}

class Node {
    constructor(character, isEnd) {
        this.character = character;
        this.isEndFlag = isEnd;
        this.next = new Map();
    }

    addToNext(ch, end) {
        if (this.next.has(ch)) {
            return this.next.get(ch);
        }
        const nextNode = new Node(ch, end);
        this.next.set(ch, nextNode);
        return nextNode;
    }

    findNext(ch) {
        return this.next.get(ch) || null;
    }

    isEnd() {
        return this.isEndFlag;
    }

    setEnd() {
        this.isEndFlag = true;
    }
}

module.exports = { PrefixTree };
