class MontyHall {
    constructor() {
        this.doors = [];
        this.statistics = undefined;
        this.getDoors();
    }

    getGoat(selection) {
        return [0, 1, 2].find((n) => n !== selection && !this.doors[n]);
    }

    getDoors() {
        const doors = [false, false, false];
        const car = this.random(3);
        doors[car] = true;
        this.doors = doors;
    }
    
    random(x) {
        return Math.floor(Math.random() * x);
    }

    generateStatistics(x) {
        const [switchSuccess, switchFail] = this.testMonty(x, true);
        const [withoutSuccess, withoutFail] = this.testMonty(x, false);

        const d = x/100 // Percentage denominator

        this.statistics = this.getStatJSON(switchSuccess, switchSuccess/d,
            switchFail, switchFail/d, withoutSuccess, withoutSuccess/d,
            withoutFail, withoutFail/d);
    }

    testMonty(amount, shouldSwitch) {
        let success = 0;
        for (let i = 0; i < amount; i++) {
            if (this.playMonty(shouldSwitch))
                success++;
        }
        return [success, amount - success];
    }

    playMonty(shouldSwitch) {
        let selection = this.random(3);
        this.getDoors();
        const goatIndex = this.getGoat(selection);
        if (shouldSwitch) {
            selection = [0, 1, 2].find((n) => n !== selection && n !== goatIndex);
        }
        return this.doors[selection]
    }

    getStatJSON(ssn, ssp, sfn, sfp, wsn, wsp, wfn, wfp) {
        return {
            'switch': {
                'success': {
                    'number': ssn,
                    'percent': ssp
                },
                'fail': {
                    'number': sfn,
                    'percent': sfp
                },
                'total': ssn + sfn
            },
            'without': {
                'success': {
                    'number': wsn,
                    'percent': wsp
                },
                'fail': {
                    'number': wfn,
                    'percent': wfp
                },
                'total': wsn + wfn
            }
        }
    }
}



/*

'switch': {
    'success': {
        'number': 68,
        'percent': 68
    },
    'fail': {
        'number': 32,
        'percent': 32
    },
    'total': 100
},
'without': {
    'success': {
        'number': 62,
        'percent': 31
    },
    'fail': {
        'number': 138,
        'percent': 70
    },
    'total': 200
}

*/

export default MontyHall;