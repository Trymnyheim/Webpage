class CardStack {

    constructor() {
        this.stack = [];
        this.createStack();
        this.shuffle();
    }

    createStack() {
        const types = ["clubs", "hearts", "spades", "diamonds"];
        types.forEach((type) => {
            for (let i = 1; i <= 13; i++)
                this.stack.push(new Card(i, type))
        });
    }

    shuffle() {
        let j;
        for (let i = this.stack.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            [this.stack[i], this.stack[j]] = [this.stack[j], this.stack[i]];
        }
    }

    pickCard() {
        if (this.stack.length == 0) {
            return null;
        }
        return this.stack.pop();
    }

    length() {
        return this.stack.length;
    }
}


class Card {
    
    constructor(number, type) {
        if (!this.isValid(number, type))
            throw new Error("Invalid card input.");
        this.number = parseInt(number);
        this.type = type.toLowerCase();
        if (["hearts", "diamonds"].includes(type))
            this.color = "red";
        else
            this.color = "black";
    }

    isValid(number, type) {
        number = parseInt(number);
        if (number < 1 || number > 13)
            return false;
        const types = ["clubs", "hearts", "spades", "diamonds"];
        if (!types.includes(type.toLowerCase()))
            return false;
        return true;
    }

    // For debugging:
    print() {
        console.log(this.number + " of " + this.type);
    }
}

export default CardStack;