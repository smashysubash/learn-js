
checkSpeed(190)

function checkSpeed(speed){
    if(speed>70){
        let points =Math.floor( (speed-70)/5)
        console.log(points<12?points+' points':'account suspended')

    }else{
        console.log('Ok')
    }
}