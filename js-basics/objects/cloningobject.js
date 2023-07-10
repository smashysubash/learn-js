const object={
    name:'subash',
    position:'intern'
}

const clonedone = Object.assign({},object)

console.log(clonedone)

const clonedtwo = {...object}//spread operator

console.log(clonedtwo)

let a = object

a.name='smashy'

console.log(a)
console.log(object)//changed as object is pass by reference