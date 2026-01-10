
function classResults(students){
    let topper=0;
let classavg=0;
for(let i=0;i<students.length;i++){
    let total=0;
    for(let j=0;j<students[i].marks.length;j++){
        total+=students[i].marks[j]
    }
    students[i].avg=total/students[i].marks.length;
    classavg+=total
    if(students[i].avg>students[topper].avg)topper=i;
}
classavg=classavg/(students.length*students[0].marks.length)
return [students[topper].name,classavg]
}

function rpsGame(user,computer){
    if(user==computer)return "Draw"
    if(user=="Rock" && computer=="Scissors")return `You won user-${user} comp - ${computer}`
    if(user=="Paper" && computer=="Rock")return `You won user-${user} comp - ${computer}`
    if(user=="Scissors" && computer=="Paper")return `You won user-${user} comp - ${computer}`
    return `Computer won - user-${user} comp - ${computer}`
}
function randomEle(array){
    const num= Math.floor(Math.random()*(array.length));
    console.log(num);
    
    return array[num];
}
// ROCK PAPER SCISSORS Implimentation
// const choices=["Rock","Paper","Scissors"];
// console.log(rpsGame("Paper",randomEle(choices)));

/* Function 1 Implementation
const students=[{name:"Sumit",marks:[30,23,27,18,20]},{name:"Amit",marks:[26,23,17,19,20]},{name:"Subham",marks:[26,22,24,19,26]},{name:"Aman",marks:[22,23,19,17,20]}]
 const topper=classResults(students)[0];
console.log(topper);
*/

