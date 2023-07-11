function geteligible(age){
    return new Promise((resolve,reject)=>{
        if(age>18){
            resolve('eligible')
        }else{
            reject('not eligible')
        }
    })
}

geteligible(10)
.then((str)=>console.log(str))
.catch((err)=>console.log(err))