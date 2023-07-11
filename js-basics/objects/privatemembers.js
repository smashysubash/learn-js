function circle(radius){
    
    this.radius = radius;
    let centerpoint = 0;
    Object.defineProperty(this,'givecenterpoint',{
        get: function(){
            return centerpoint
        }
    })
    this.draw = function draw(){
        console.log(radius,centerpoint)
    }
    
}

const t = new circle(20)


console.log(t.givecenterpoint)