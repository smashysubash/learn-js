const nums =[1,2,3,4,5]

for(let i of nums){
    console.log(i)
}

nums.forEach((num,ind)=>console.log(ind,num));


//sorting arrays

const courses=[
    {id:1,name:'node'},
    {id:2,name:'1react'}
]

courses.sort((a,b)=>{
    if(a.name<b.name)return -1;
    else if(a.name>b.name) return 1;
    return 0;
})

console.log(courses)