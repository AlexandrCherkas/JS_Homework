function isPalindrome(word){
    word = word.toUpperCase();
    var nWord = word.split('').reverse('').join('');
    return nWord == word;
}
isPalindrome('шалаШ');
isPalindrome('привет');