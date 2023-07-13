class shape{
    constructor(color){
        this.color=color
        this.move= function() {
            console.log('move')
        }
    }
}

class circle extends shape{
    constructor(radius,color){
        super(color)
        this.radius=radius
    }
}

const c = new circle(20,'blue')