//number 1
for (let i = 0; i <=10;i++){
    console.log(i);
}
let n=0
while(n<=10){
    console.log(n);
    n++
}
let i=0
do{
    console.log(i);
    i++
}while (i<=10)
//number 2
// Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i=10 ;i>=0;i--)
console.log(i);

let b=10
do{console.log(b);b--
}
while(b>=0)

let c=10
do{console.log(c); c--} 
while (c>=0)
//number3
let f =5
for(let d=0; d<=f ; d++){
console.log(d);}

///question4
let line="";
for(i=0;i<=7;i++){
  line +="#"
  console.log(line);
}
//number5
for(let z=0;z<=10; z++){
    console.log(`${z} * ${z} = ${z *z}`);
}
//number6
for(let y=0;y<=10; y++){
    console.log(`${y**1}  ${y**2}  ${y**3}`);
}
//number7
// Use for loop to iterate from 0 to 100 and print only even numbers
for(let i=0;i<=100;i+=2){
    console.log(i);
}
//number 9
for(let n =0; n<=100;n++){
    for(let p=2;p<n;p++){
        if (n%p===0 && n>1){
            console.log(n);
        }
    }
}
//number 10
let sum=0
for(let r=0; r<=100; r++){
    sum+=r;
    console.log(sum);
}
//number11
let odd =0
let even=0
for(let i= 0;i<=100;i++){
    if(i%2==0){
        even+=1;
    } else if(i%2>0){
        odd+=i}
}
console.log(`sum of all even is${even}, and the sum of odd is ${odd}`);
//number12
let sumEvenOdd =[0,0]
for(let i=0;i<=100;i++){
    if(i%2==0){
        sumEvenOdd[0] +=i;
    }else if(1%2>0){
        sumEvenOdd[1] +=i
    }
}console.log(sumEvenOdd);
//number13
let newArray =[]
for(let i=0;i<5;i++){
    newArray.push(Math.floor(Math.random()*5))
}console.log(newArray);
// number14
let newArrayy =[]
for(let i=0;i<5;i++){
    if(i==3){
        break
    }

}

   { newArrayy.push(Math.floor(Math.random()*10))
}console.log(newArrayy);
//exercise 2
const countries = ['Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya',
'iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}console.log(newArr);

//number7
let countWtL=[]
  let countWD=[]
  for(let i=0;i<countries.length;i++){
    if(countries[i].includes('land')){
        countWtL.push(countries[i]);
    }else{
        countWD.push(countries[i])
    }
  }console.log(countWD);
  console.log(countWtL);
  //number8
  let countriesWithIa =[]
  let countwthoutIa=[]
  for(let g=0;i<countries.length;i++){
    if (countries[i].includes('ia')){
        countriesWithIa.push(countries[i])
    }else{
        countwthoutIa.push(countries[i])
    }
  }
  console.log(`countries with 'ia'${countriesWithIa}`);
  console.log(`countries without 'ia'${countwthoutIa}`);
  //number 9
  let countriesCharLength= []
  for (let i = 0; i < countries.length; i++) {
    countriesCharLength.push(countries[i].length);
}
console.log(countriesCharLength);
let highest;
highestNumm = Math.max.apply(null, countriesCharLength);
console.log(countries[countriesCharLength.indexOf(highestNumm)]);
//number10
let countriesFiveChars = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesFiveChars.push(countries[i])
    }
}
console.log(countriesFiveChars)
//number11
let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"];
let webTechsLength = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechsLength.push(webTechs[i].length);
}
console.log(webTechsLength);
let highestChar;
highestChar = Math.max.apply(null, webTechsLength);
console.log(highestChar)
console.log(webTechs[webTechsLength.indexOf(highestChar)]);
//number12
let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    newWebTechs.push([webTechs[i], webTechs[i].length])
}
console.log(newWebTechs)
//question13
let mernStack = ["MongoDb", "Express", "React", "Node"]
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 0);
}
console.log(mern)
//number14
let techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < techs.length; i++) {
    console.log(techs[i])
}
for (let tech of techs) {
    console.log(tech);
}
//number15
let fruit=['lemon', 'mango', 'orange', 'banana']
for (let i=0; i<fruit.length; i++){
    console.log(fruit[i]);
}
// level 3










