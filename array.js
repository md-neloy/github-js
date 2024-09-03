const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rev_number = [];
// insret the number array value in rev_number array using unshift for reversing the number array using for of loop
for (let num of number) {
  rev_number.unshift(num);
}
console.log(rev_number);

// sorting the number using array
const numbers = [3, 49, 91, 8, 2, 0, 1];

// ascending order
const number_asc = numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers_asc);

// descending order
const number_dsc = [...numbers].sort(function (a, b) {
  return b - a;
});
console.log(number_dsc);