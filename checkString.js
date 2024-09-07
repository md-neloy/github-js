let country = "bangladeshaA";
const leters = "aA";
let count = 0;
for (let leter of country) {
    if (leters.includes(leter)) {
      count++;
    }
}
console.log(count);