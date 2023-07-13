class Circle{
    constructor(radius){
        this.radius=radius
    }
    draw(){
        console.log('draw')
    }
    static parse(str){
        const radius = JSON.parse(str).radius
        return new Circle(radius)
    }
}

const circle = Circle.parse('{ "radius": 1}')
console.log(circle)