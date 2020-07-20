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

// Вариант №2 (будет update)
function countSentencesLetters(text) {
    return text.split('!');

}
countSentencesLetters('Привет, студент! Студент... Как дела, студент?');

function countSentencesLetters(text) {
    var number=0;
    var del = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    var q = text.split('!').shift();
    console.log(q);

    for (var key of q.toLowerCase().split('')){
        if(del.includes(key)){
            number++;
        }
    }
//


    return number;
}
countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
VM2225:5 Привет, студент
13