class MontyHall {
    constructor() {
        this.doors = this.getDoors()
    }
/*
    playMonty(shouldSwitch) {
        let selection = random(3);
        const goatIndex = this.getGoat(this.doors, selection);
        if (shouldSwitch) {
            selection = [0, 1, 2].find((n) => n !== selection && n !== goatIndex);
        }
        return doors[selection]
    }
    
    getGoat(doors, selection) {
        return [0, 1, 2].find((n) => n !== selection && !doors[n]);
    }
*/ 
    getDoors() {
        const doors = [false, false, false];
        const car = this.random(3);
        doors[car] = true;
        return doors;
    }

    select(index) {
        console.log(index);
    }
    
    random(x) {
        return Math.floor(Math.random() * x);
    }

/*
    testMonty(amount, shouldSwitch) {
        let success = 0;
        let fail = 0;
        for (let i = 0; i < amount; i++) {
            if (playMonty(shouldSwitch))
                success++;
            else
                fail++;
        }
        console.log(`Successes: ${success}\nFails: ${fail}`);
    }
*/
}

export default MontyHall;