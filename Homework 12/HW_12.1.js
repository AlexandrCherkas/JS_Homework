function filterNumbersArr(arr) {
    var positiveArr = arr.filter(function(number) {
        return number > 0;
    });
    return positiveArr;
}
filterNumbersArr([-1, 0, 2, 34, -2]);