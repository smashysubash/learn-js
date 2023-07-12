//constructor function shape
function Shape(){ 
}
//protoype duplicate for shape object
Shape.prototype.duplicate=function(){
    console.log('duplicate')
}
//constructor function circle
function Circle(radius){
    this.radius= radius
}
//inherit shape properties to circle
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle//assign constructor as circle as the above line assigns shape constructor

Circle.prototype.draw = function(){
    console.log('draw')
}

const s =new Shape()
const c =new Circle()//duplicate property can be accessible from circle object

console.log(s)
c.duplicate()