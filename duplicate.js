const biryanikhor = ["abul", "babul", "cabul", "abul", "babul", "dabul"];
const numbers = [1, 5, 61, 5, 87, 5, 81, 61];

function removeDuplicate(arr) {
    let dummyArray = [];
    for (let item of arr) {
        if (dummyArray.includes(item) != true) {
            dummyArray.push(item);
        }
    }
    return dummyArray;
}

console.log(removeDuplicate(biryanikhor));