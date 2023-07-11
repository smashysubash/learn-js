function sum(a,b,c){
    c(a+b)
}

sum(10,20,(result)=>{
    console.log(result)
})