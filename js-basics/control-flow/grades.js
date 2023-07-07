const marks = [80, 60 , 70]

console.log(calculategrade(marks))

function calculategrade(marks){
    const avg = calcaverage(marks)
    switch (true){
        case avg>=90:
            return 'A'
        case avg>=80:
            return 'B'
        case avg>=70:
            return 'C'
        case avg>=60:
            return 'D'
        default:
            return 'F'
    }
}

function calcaverage(marks){
    let t=0
    for(let m of marks){
        t+=m
    }
    return t/marks.length;
}