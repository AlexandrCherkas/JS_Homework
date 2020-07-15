function divideArr (arr, n) {
    var nArr = [];
    for (var i = 0; i<arr.length/n; i++){
        nArr[i] = arr.slice((i*n), (i*n) + n);
    }
    return nArr;
}
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);
divideArr([1, 2, 3, 4], 2);

