function deleteInvalids(arr) {
  if (Array.isArray(arr) != true) return arr;
  else {
    for (let items of arr) {
      if (typeof(items) != "number") {
        let temp = arr.indexOf(items);
        arr.splice(temp, 1);
      }
    }
    return arr;
  }
}

const numberArr = ["adiba", 1, 3, 4, -10, "arifa"];
console.log(deleteInvalids(numberArr));
