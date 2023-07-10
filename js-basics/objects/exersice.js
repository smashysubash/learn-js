function objectaddr(street,city,zipcode){
    return {
        street,
        city,
        zipcode,
        showAddress: function newone(){
            console.log(`${this.street},${this.city}`)
        }
    };
}


const obj = objectaddr('nehru nagar','new delhi','518201')

console.log(obj.showAddress())


let add1 = objectaddr('a','b','c')
let add2 = objectaddr('a','b','c')

function areEqual(add1,add2){
    return add1.street===add2.street&&add1.city===add2.city&&add1.zipcode===add2.zipcode;
}

function areSame(add1,add2){
    return add1===add2;
}

console.log(areEqual(add1,add2))
console.log(areSame(add1,add2))