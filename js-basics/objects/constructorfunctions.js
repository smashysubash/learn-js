function circle(radius){
    this.radius=radius;
    this.draw = ()=>{
        console.log(this.radius)
    }
}

const c1 = new circle(10)
console.log(c1)
c1.draw()