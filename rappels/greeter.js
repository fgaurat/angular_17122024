function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// Javascript => object oriented
var user = { firstName: "Jane", lastName: "User" };
var hello = greeter(user);
console.log(hello);
