function calculation_grade(score){
    if (score >= 80){
        grade = 'A'
    }
    else if(score >= 70){
        grade = 'B'
    }
    else if(score >= 60){
        grade = 'CB'
    }
    else if(score >= 50){
        grade = 'D'
    }
    else{
        grade = 'F'
    }
    return grade
}

let student1 = calculation_grade(60)

console.log(student1)