function* permutations(str) {
    const arr = str.split('').sort();

    function swap(i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    function reverse(left, right) {
        while (left < right) {
            swap(left++, right--);
        }
    }

    function nextPermutation() {
        let i = arr.length - 2;
        while (i >= 0 && arr[i] >= arr[i + 1]) {
            i--;
        }

        if (i < 0) return false;

        let j = arr.length - 1;
        while (arr[j] <= arr[i]) {
            j--;
        }

        swap(i, j);
        reverse(i + 1, arr.length - 1);
        return true;
    }

    yield arr.join('');

    while (nextPermutation()) {
        yield arr.join('');
    }
}

module.exports = { permutations };