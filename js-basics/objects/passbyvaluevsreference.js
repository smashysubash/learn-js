//primitive types copy by value

let num=10
function addnum(num){
    num++
}
addnum(num)
console.log(num)//10

//reference typr copy by reference

let obj = {
    value:10
}

function addvalue(obj){
    obj.value++;
}
addvalue(obj)
console.log(obj)//{value:11}