const person = {
    name: "neloy",
    age: 24,
    gender: "male",
    department: "cse",
    extracurriculam: ["sleeping","playing cricket","foodball","chess","watching movie"]
}
// accesssing the value from the objects using older method.
console.log(person.name);
// updating the object property value
person.age = 25;
console.log(person.age);
// accessing the value from the objects using new method in js.
console.log(person["name"]);
// updating the object property value
person["age"] = 24;
console.log(person["age"]);
// keeping the object property value in a variable
const Gender = "gender";
console.log(person[Gender]);
// updating value by variable
let fullName = "name";
person[fullName] = "Mahmudul Hassan Neloy";
console.log(person[fullName]);
// printing the full objects
console.log(person);

// adding new object property & value
person["designation"] = "student";
console.log(person);
// adding new object property & value in older way
person.color = "white";
console.log(person);