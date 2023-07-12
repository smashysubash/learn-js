
//object with functions
const canEat ={
    eat: function(){
        this.hunger--;
        console.log('eating')
    }
}

const canWalk ={
    walk: function(){
        console.log('Walking')
    }
}


function Lion(){

}
//mixin - composition the lion object with caneat & canwalk
Object.assign(Lion.prototype,canEat,canWalk)

const l1 = new Lion()
console.log(l1)