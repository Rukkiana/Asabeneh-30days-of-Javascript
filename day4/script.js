//exercise1
let age=prompt('enter your age')
if (age>=18 ){
    alert(`you are old enough to drive `)
}else {
    let ageLeft=18-age
    alert(`you have ${ageLeft}  years left to drive`)

}
console.log(age);
let myAge=prompt('my age is')
let yourAge=prompt('enter your age')
if (myAge>yourAge){
    years=(myAge-yourAge)
    console.log(`i am  ${years}  years older than you`);
}else{
    years=(yourAge-myAge)
    console.log(`you are ${years} years older than me`);
}
//number3
let a=4
let b =2
if(a>b){
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${a} is less than ${b}`);
    
}

a>b     ?
console.log(`${a} is greater than ${b}`):
console.log(`${a} is less than ${b}`);
number4
let number=prompt('enter number')
if(number%2===0){
    console.log(`${number} is an even number`);
}else{
    console.log(`${number} is an odd number`);
}



//exercise2
let score=prompt('enter your score')
if(score >=80 && score <=100){
    console.log(`your grade is A`);
} else if(score >=70 && score <=89){
    console.log(`your grade is B`);

}else if(score >=60 && score <=69){
    console.log(`your grade is C`);

}else if(score >=50 && score <=59){
    console.log(`your grade is D`);

}else if(score >=0 && score <=49){
    console.log(`your grade is F`);

}else{
    console.log(`you do not have a grade`);
}


//number 3
let month=prompt('what month is it?')
month=month.toLowerCase
if(month== `september`,`october` ||`november`) {
    console.log(`the season is autum`);
}else if(month==`december`,`january`||`febuary`){
    console.log(`the season is winter`);


}else if(month==`march`,`april`||`may`){
    console.log(`the season is spring`); 
}else if(month==`june`,`july`||`august`){
    console.log(`the season is summer`);
}else{
    console.log('its not a month');
}


//number4
let day=prompt(`what is the day today`);
day=day.toLowerCase();
if(day=="saturday" || day=="sunday"){
    console.log(`${day} is weekend`);
}else{
    console.log(`${day} is a working day`);
}
//exercise 3














