
function testMonty(amount, shouldSwitch) {
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

function playMonty(shouldSwitch) {
    const doors = getDoors();
    let selection = random(3);
    const goatIndex = getGoat(doors, selection);
    if (shouldSwitch) {
        selection = [0, 1, 2].find((n) => n !== selection && n !== goatIndex);
    }
    return doors[selection]
}

function getGoat(doors, selection) {
    return [0, 1, 2].find((n) => n !== selection && !doors[n]);
}

function getDoors() {
    const doors = [false, false, false];
    const car = random(3);
    doors[car] = true;
    return doors;
}

function random(x) {
    return Math.floor(Math.random() * x);
}

const n = 1000000
console.log(`\n${n} test cases without switching:\n`);
testMonty(n, false);
console.log(`\n${n} test cases with switching:\n`);
testMonty(n, true)