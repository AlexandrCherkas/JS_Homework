function filterNumbersArr (arr) {
    var firstPositiveEl = arr.find(item =>item > 0)
    return firstPositiveEl;
}
filterNumbersArr([-1, 0, 2, 34, -2]);