const sentence = "i am learning web development";
// reverse the sentence method 1
let reverse1 = '';
for (var i = sentence.length-1; i >= 0; i--){
    reverse1 += sentence[i];
}
console.log(reverse1);
// reverse the sentence method 2
let reverse2 = "";
for (var i of sentence) {
    reverse2 = i + reverse2;
}
console.log(reverse2);