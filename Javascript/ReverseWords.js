function reverseWordsInSentence(sentence) {
    var words = sentence.split(" ");
    var reverseSentence = "";
    for (var word of words) {
        var reverseWord = '';
        for(var i = word.length - 1; i >= 0; i--) {
            reverseWord += word[i];
        }
        reverseSentence += reverseWord + ' ';
    }
    return reverseSentence;
}

sen = reverseWordsInSentence("Hello World How Are you")
console.log(sen)