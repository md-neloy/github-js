const prices = [
  { name: "samsung", price: 20000, cemera: "22mp", color: "black" },
  { name: "xiaomi", price: 18000, cemera: "22mp", color: "black" },
  { name: "oppo", price: 22000, cemera: "22mp", color: "black" },
  { name: "iphone", price: 200000, cemera: "22mp", color: "black" },
];

function getcheapPhone(phones) {
  let min = phones[0];
  for (let price in phones) {
    if (phones[price].price < min.price) {
      min = phones[price];
    }
  }
  return min;
}

const cheapPhone = getcheapPhone(prices);
console.log("cheapest phone is: ", cheapPhone);
