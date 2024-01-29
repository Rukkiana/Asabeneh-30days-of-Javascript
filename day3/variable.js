//exercise 1
let firstName='Rukayyat'
let lastName='Abdulkadir'
let country='Nigeria'
let city='Kwara'
let Age=35
let ismarried=true
let year=2024
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof Age);
console.log(typeof ismarried);
console.log(typeof year);
console.log(typeof "10"=== 10);
let JavaScript='JavaScript is a language in programing '
let javascript='it consist of a lenth of 9 lenghty alphabet'
let javascript2="javascript has a last index of t "
console.log(JavaScript);
console.log(javascript);
console.log(javascript2);
let JavaScript3='JavaScript is not  a language in programing '
let javascript4='it consist of a lenth of 12 lenghty alphabet'
let javascript5="javascript has a last index of b "
console.log(JavaScript3);
console.log(javascript4);
console.log(javascript5);

4 > 3 //true
4 >= 3//true
4 < 3//false
4 <= 3//false
4 == 4//true
4 === 4//true
4 != 4//false
4 !== 4//false
4 != '4'//false
4 == '4'//true
4 === '4'//false
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
let p='python'
let j='jargon'
console.log(p.length-1);
console.log(j.length-1);
console.log("p".length != "j".length)
4 > 3 && 10 < 12//true
4 > 3 && 10 > 12//false
4 > 3 || 10 < 12//true
4 > 3 || 10 > 12//true
!(4 > 3)//false
!(4 < 3)//true
!(false)//true
!(4 > 3 && 10 < 12)//false
!(4 > 3 && 10 > 12)//true
!(4 === '4')//true
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!(p.includes("on")));
console.log(!(j.includes("on")));
const date=new Date()
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime())


//exercise 2
// number 1
// let base=prompt('enter base')
// let height=prompt('enter height')
// let areaOfTriangle=(0.5* base * height);
// console.log(areaOfTriangle);
//number 2
// let  sideA=prompt('enter A of the triangle' )
// let sideB=prompt('enter B of the triangle')
// let  sideC=prompt('enter C of the triangle')
// let perimeter=(+sideA + +sideB + +sideC );
// console.log(perimeter);
//number 3
// let length=prompt('enter length');
// let width=prompt('enter width')
// let areaOfRectangle=(length * width)
// console.log(areaOfRectangle);
// let perimeterOfRectangle=2*(+length + +width)
// console.log(perimeterOfRectangle);
//number 4
// let radius=prompt('enter radius')
// const PI=3.14
// const areaOfCircle = PI * radius * radius
// console.log(areaOfCircle);
// let r=3
// let circumference=2 * PI * r
// console.log(circumference);
// //number 8
// let x=2
// let y=(x**2 + +6*x + +9)
// console.log(y);
//number 9
// let hour=prompt('how many hours spent?')
// let rate=prompt('enter rate')
// let weeklyEarning=(rate * hour)
// console.log(weeklyEarning);
// //number 10
// let name=prompt('what is the length of your name');
// if(name >7){
//     alert('your name is long');
// }else{
//     alert('your name is short')
// }
// //number11
// let firstNamee=prompt('what is your first name')
// let familyName=prompt('what is your last name')
// console.log(`my first name ${firstNamee} is shorter than my family ${familyName}`);

//nun=mber 12
let myAge=250
let yourAge=25
let diff=myAge - - yourAge


console.log(`i am ${diff} years older than you`);
// //number13
// let age=prompt('how old are you');
// if(age>=18){
//     alert('u are old enough to drive')
// }else{
//     let ageLeft=18 - +(age)
//     alert(`you are left with  ${ageLeft} years to drive`)
// }
// console.log(age);
//number 14
let number=prompt('enter years')
const seconds=number * 60 * 60 * 24 * 365;
alert(`you lived ${seconds} seconds`);



// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
let dateNow = new date()
const yearr = now.getFullYear() 
const month = now.getMonth() + 1 
const datee = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes()

console.log(`${yearr}-${month}-${datee}-${hours}-${minutes}`);
console.log(`${datee}-${month}-${yearr}-${hours}-${minutes}`);
console.log(`${datee}/${month}/${yearr}/${hours}/${minutes}`);

//exersise 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
const dateFormatYear=`${dateNow.getFullYear()}-0${dateNow.getMonth()}-${dateNow.getDate()}0${dateNow.getHours()}:${dateNow.getMinutes()}`;
console.log(dateFormatYear);





































