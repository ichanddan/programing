// Write a code which can give grades student according to their scores
// 80-100 A grade
// 70-80 B grade 
// 60-69 C grade
// 50-59 D grade
// 0-49 fale


let grade=prompt("Enter the number");
if (grade>=90 && grade<=100) {
    console.log("grade is A",grade);
} else if(grade>=70 && grade<=89){
    console.log("grade is B",grade);
} else if(grade>=60 && grade<=69){
    console.log("grade is C",grade);
} else if(grade>=50 && grade<=59){
    console.log("grade is D",grade);
}else{
    console.log("grade is F",grade);
}