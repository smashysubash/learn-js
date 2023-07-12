//constructor function
function Circle(radius){
    this.radius=radius
}
//overwriting the proto function toString() as it only prints [Object Object]
Circle.prototype.toString = function(){
    return `circle with radius ${this.radius}`
}
//creating object for circle
const c1 = new Circle(20)
//calling overwrited function
console.log(c1.toString())