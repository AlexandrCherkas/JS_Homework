function areAnagrams (wordF, wordS) {
    wordF = wordF.toUpperCase();
    wordS = wordS.toUpperCase();
    var Fword = wordF.split('').sort().join('');
    var Sword = wordS.split('').sort().join('');
    return Fword == Sword;
}
areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко'); 