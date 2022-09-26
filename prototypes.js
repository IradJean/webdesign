/*
prototype refers to a mechanism 
used to inherit properties from other objects
*/
// function to count for the words in a composition
function countWords(str)
{
    let paragraph = prompt('Type your compposition here');
    let splittedWords = paragraph.split(' ');
    return splittedWords.length;
}
console.log(countWords('hello World!'));