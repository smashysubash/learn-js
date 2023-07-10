const nums =[1,-1,2,3]

const nnums = nums.filter((value)=>{
    return value>=0;
})

console.log(nnums)


//mapping array

const items = nnums.map((value)=>'=>'+value)

console.log(items)