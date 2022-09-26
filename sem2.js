// coding for fun:
let name = "Jean de Dieu"
let age = 24;
// console.log(name, age);
let ConstructorFunction = function(name, age)
{
this.name = name;
this.age = age;
this.sayName = function(){ console.log(`Hello Mr ${this.name}!`)};
}
ConstructorFunction.prototype.sayAge = function(){
    return `I am ${this.age}`;
}
// instatiating my constructor function 
let person1 = new ConstructorFunction('Jean', 22);
let constr = person1.constructor;

console.log(person1.sayAge())
