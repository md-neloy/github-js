const sentence = "i am learning web development";
// reverse the sentence method 1
let reverse1 = '';
for (var i = sentence.length-1; i >= 0; i--){
    reverse1 += sentence[i];
}
console.log(reverse1);