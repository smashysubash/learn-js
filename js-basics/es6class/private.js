const _radius = Symbol()
const _draw = Symbol()

class circle{
    constructor(radius){
        this[_radius]=radius
    }
    [_draw]=function(){
        console.log('draw')
    }
}

const c = new circle()
console.log(c)