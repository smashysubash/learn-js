const movie ={
    title:'leo',
    rating: 5,
    actor:'vijay',
    releaseYear: 2023
}
showproperties(movie)
function showproperties(mov){
    for(let i in mov){
        if(typeof mov[i]==='string'){
            console.log(i, mov[i])
        }
    }
}