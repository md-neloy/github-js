function make_avg(numArr, size) {
    let sum = 0;
    for (let num of numArr) {
        sum += num;
    }
    return sum / size;
}
const size = 5;
const number = new Array(size);
for (let i = 0; i < size; i++){
    let value = parseInt(prompt(`Enter the ${i + 1}  integer value`));
    number[i] = value;
}
document.write("avarage of number is "+ make_avg(number, size));
