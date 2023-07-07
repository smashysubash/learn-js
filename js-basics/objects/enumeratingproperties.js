const circle ={
    radius: 10,
    draw(){
        console.log(this.radius)
    }
}

for(let key of Object.keys(circle)){
    console.log(key)
}

for(let [key, value] of Object.entries(circle)){
    console.log(key,value)
}