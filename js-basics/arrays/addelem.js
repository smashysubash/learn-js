const num = [1,2]
num.push(4,5)

num.unshift(0)

num.splice(3,0,3)
console.log(num)

//combine arrays

const num2 = [6,7,8]

const a = num.concat(num2)
const b = a;
b[0]='a'

console.log(a,b)

//spread op

const narr=[...num,...num2]
console.log(narr)