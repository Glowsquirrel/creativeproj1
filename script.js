function getElements(event) {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var div = document.getElementById("output-block");
    
    var name = nameCombine(name1, name2);
    if (name !== undefined && name.trim() !== ""){
        var id = "output";
        document.getElementById(id).innerHTML = name;
        div.style.display = "inline-block";
    }
}

function nameCombine(name1, name2){
    var firstNameEndIndex = getFirstNameIndex(name1);
    var secondNameStartIndex = getSecondNameIndex(name2);
    var firstName = name1.substring(0, firstNameEndIndex+1);
    var secondName = name2.substring(secondNameStartIndex+1, name2.length);
    var finalName = firstName + secondName;
    return finalName;
}

//get the index with the first vowel in given word
function firstVowelIndex(str){
    for (var i = 0; i < str.length; i++) {
        if (isVowel(str.charAt(i))) {
            return i; 
        }
    }
    //no vowels were found, so return middle index of word
    return Math.floor(str.length/2);
}

//get the index with the first vowel in given word
function getFirstNameIndex(str){
    //if starts with vowel, get index of consonant immediately before next vowel OR up to the max number of consonants set (may be less due to name length)
    if (isVowel(str.charAt(0))){
        var maxConsonants = 3;
        var numLetters = Math.min(str.length, maxConsonants);
        for (var i = 1; i < numLetters; i++)
            if (isVowel(str.charAt(i))) {
                return i-1; //exclude the newly found vowel
            }
        return maxConsonants; //no more vowels found, so take max number of consonants
    }
    //if name starts with consonant, get index of first vowel
    for (var i = 0; i < str.length; i++) {
        if (isVowel(str.charAt(i))) {
            return i; 
        }
    }
    //no vowels were found, so return middle index of word
    return Math.floor(str.length/2);
}

//get the index with the first vowel in given word
function getSecondNameIndex(str){
    for (var i = 0; i < str.length; i++) {
        if (isVowel(str.charAt(i))) {
            return i; 
        }
    }
    //no vowels were found, so return middle index of word
    return Math.floor(str.length/2);
}

function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}
