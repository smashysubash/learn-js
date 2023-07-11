//setting a prototype

const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
  function Person(name) {
    this.name = name;
  }
  
Object.assign(Person.prototype, personPrototype);

Person.prototype.greet2=()=>{
    console.log("hello")
}

const p1 = new Person('smashy')
p1.greet2() 

console.log(Object.hasOwn(p1, "name")); // true
console.log(Object.hasOwn(p1, "greet")); //false