function getElements() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var id = "output";
    nameCombine(name1, name2, id);
}

function nameCombine(name1, name2, id){
    if (!checkFields(name1, name2)) {
        return;
    }
    else {
        var firstNameEndIndex = firstVowelIndex(name1);
        //var secondNameStartIndex = lastVowelIndex(name2);
        var secondNameStartIndex = firstVowelIndex(name2);
        var firstName = name1.substring(0, firstNameEndIndex+1);
        var secondName = name2.substring(secondNameStartIndex+1, name2.length);
        var finalName = firstName + secondName;
        document.getElementById(id).innerHTML = finalName;
    }
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

//return the index with the last vowel in the word. vowels at the end of the word
//will be skipped
function lastVowelIndex(str){
    for (var i = str.length-2; i > 0; i--) {
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

function checkFields(n1, n2) {

    if (n1 == "" && n2 == "") {
        alert("Please enter two names");
    } else if (n1 == "") {
        alert("Name 1 must be filled out");
    } else if (n2 == "") {
        alert("Name 2 must be filled out");
    } 
    else return 1;
}