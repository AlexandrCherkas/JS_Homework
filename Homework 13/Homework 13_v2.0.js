// Задача №1:
// Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.
function addObj(arr) {
    var newArr = [];
    arr.forEach(function (item,i){
        newArr[i] = new Object(item)
    })
    return newArr;
}
addObj(['Alex','Vasya']);

// !!!!Новый вариант, через метод MAP !!!!!!!!!!!!!!!
ffunction addObj(arr) {
    var newArr=  arr.map(function (item,i){
        return new Object('name : ' + item)
    })
    return newArr
}
addObj(['Alex','Vasya']);

//Задание 2:
//     Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
//     Для решения использовать перебирающий метод массивов.

function getTime(arr) {
    var text = '';
    arr.forEach(function(v,i,a) {
        text += ': ' + v;
    })
    return 'Текущее время'+ text;
}
getTime(['00', '13', '24']);


//!!!!!Новый вариант, через метод Reduce !!!!!!!!!!!!!!!
function getTime(arr) {
    var time = arr.reduce(function(v,i) {
        return v + ':' + i;
    })
    return 'Текущее время : ' + time
}
getTime(['00', '13', '24']);


// Задача №3
// Написать функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. Решение не
//     должно быть "топорным".
function getWord(word) {
    var vowelLetters = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    var number = 0;;
    for (var key of word.toLowerCase().split('')){
        if(vowelLetters.includes(key)){
            number++;
        }
    }
    return number;
}
getWord('элемента массива');


/// Новый метод !!!!!
function getWord(word) {
    var vowelLetters = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    var number = 0;
    word.toLowerCase().split('').forEach(function(item){
        if(vowelLetters.indexOf(item) > -1){
            number++;
        }
    })
    return number;
}
getWord('элемента массиваааааааа');

//Задание 4:
//     Написать функцию, которая будет принимать текст в качестве параметра. У текста должны быть пробелы, точки, запятые,
//     восклицательные и вопросительные знаки. Текст необходимо разбить на предложения (по точкам, восклицательным и
//     вопросительным знакам - убрав их).
//     Для каждого из предложений - отдельно вывести текст предложения и рядом количество букв в нем (без учета пробелов,
//     запятых и т.д. - именно букв). Из ранее непройденных методов разрешается использовать только (!!!) регулярное выражение
//     в методе split.

// Привет, студент: Letters quantity is: 13
// Студент: Letters quantity is: 7
// Как дела, студент: Letters quantity is: 14

// Вариант №1
function countSentencesLetters(text) {
    var triger = /[!?...]+/;
    var textSplit = text.split(triger);

    function totalLetters(key) {
        return (key.replace(/[,\s]/g,'')).length;
    }

    textSplit.forEach(function (item) {
        if (item.length != 0)
            console.log(item.trim(), ': Letters quantity is:', calcChars(item))
    });
}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?')

// !!!НОВЫЙ метод!!!!

function countSentencesLetters(text) {
    var triger = /[!?...]+/;
    var textSplit = text.split(triger);

    function totalLetters(key) {
        var sum=0;
        for( var v in key.split(/[,\s]/g).join('')){
            sum++
        }
        return sum;
    }

    textSplit.forEach(function (item) {
        if (item.length != 0)
            console.log(item.trim(), ': Letters quantity is:', totalLetters(item))
    });
}
countSentencesLetters('Привет, студент! Студент... Как дела, студент?')