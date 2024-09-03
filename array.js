const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rev_number = [];
// inset the number array value in rev_number array using unshift for reversing the number array using for of loop
for (let num of number) {
    rev_number.unshift(num);
}
console.log(rev_number);