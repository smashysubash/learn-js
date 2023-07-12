//constructor function shape
function Shape(color){ 
    this.color=color
}
//protoype duplicate for shape object
Shape.prototype.duplicate=function(){
    console.log('duplicate')
}
//constructor function circle
function Circle(radius,color){
    Shape.call(this, color)
    this.radius= radius
}
//inherit shape properties to circle
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle//assign constructor as circle as the above line assigns shape constructor

//overriding the duplicate of shape
Circle.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this)
    console.log('duplicate circle')
}

Circle.prototype.draw = function(){
    console.log('draw')
}

const c =new Circle(20,'white')//duplicate property can be accessible from circle object

console.log(c)//Circle { color: 'white', radius: 20 }
c.duplicate()