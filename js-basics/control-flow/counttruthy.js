const arr = [undefined, null, '',NaN, , 0, 1, 2,'arr']

console.log(counttruthy(arr))

function counttruthy(arr){
    let count =0
    for(let elem of arr){
        if(elem)count++
    }
    return count;
}