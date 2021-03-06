//Задача №1
function filterNumbersArr(arr) {
    var positiveArr = arr.filter(function(number) {
        return number > 0;
    });
    return positiveArr;
}
filterNumbersArr([-1, 0, 2, 34, -2]);


//Задача №2
function filterNumbersArr (arr) {
    var firstPositiveEl = arr.find(item =>item > 0)
    return firstPositiveEl;
}
filterNumbersArr([-1, 0, 2, 34, -2]);
Задача №3
function isPalindrome(word){
    word = word.toUpperCase();
    return word == word.split('').reverse('').join('');
}
isPalindrome('шалаШ');
isPalindrome('привет');

//Задача №4
function areAnagrams (wordF, wordS) {
   return wordF.toUpperCase().split('').sort().join('') == wordS.toUpperCase().split('').sort().join('');
}
areAnagrams('кот', 'отк'); // true
areAnagrams('кот', 'атк'); // false
areAnagrams('кот', 'отко'); // false

//Задача №5
function divideArr (arr, n) {
    var nArr = [];
    for (var i = 0; i<arr.length/n; i++){
        nArr[i] = arr.slice((i*n), (i*n) + n);
    }
    return nArr;
}
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);
divideArr([1, 2, 3, 4], 2);

// еще один вариант
function divideArr (arr, n) {
    var newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(0, n));
    }
    return newArr;
};
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);