// number 1
  const arr = []
console.log(arr)

const school=['bag','book','pencils','desk','chair','chalk','teacher']
console.log(school);
console.log(school.length-1);
const mixedDataTypes =['school','bag',1,3,'student', 2,9]
console.log(mixedDataTypes.length-1);
const Companies=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(Companies);
console.log(Companies.length);
console.log(Companies[0]);
let middleCompany=Companies[Math.round((Companies.length - 1) / 2)];
console.log(middleCompany);
console.log(Companies[Companies.length-1]);
//number 10
console.log(Companies[0]);
console.log(Companies[1]);
console.log(Companies[2]);
console.log(Companies[3]);
console.log(Companies[4]);
console.log(Companies[5]);
console.log(Companies[6]);
//number 11
let index1 = Companies[0].toUpperCase();
let index2 = Companies[1].toUpperCase();
let index3 = Companies[2].toUpperCase();
let index4 = Companies[3].toUpperCase();
let index5 = Companies[4].toUpperCase();
let index6 = Companies[5].toUpperCase();
let index7 = Companies[6].toUpperCase();
console.log(index1,index2,index3,index4,index5,index6,index7);
//numbwe12
console.log(Companies.join(','));


//number 13

let exist=Companies.indexOf('Goggle')
if(exist === -1){
    console.log('Google do exist');
}else{
    console.log('Google do not exist');
}

//number 15
console.log(Companies.sort());
console.log(Companies.reverse());
console.log(Companies.slice(0,3));
console.log(Companies.slice(4,7));
// console.log(Companies.slice([Math.round((Companies.length - 1) / 2)]));


//number 16
console.log(Companies.shift());

//number 17
console.log(Companies.splice(middleCompany));

// number 18
console.log(Companies.pop());
console.log(Companies.splice());

//exercise level 2

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let regex =[/!@#$%^&*() , ./ ]
let word = text.replace(regex, " ")
let wordLenght = word.split(" ");
console.log(word.match());
console.log(word.split(" " ,));
console.log(wordLenght.length);

//number3
//add meat at the begining
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart);
//adding at the end
shoppingCart.push('Sugar')
console.log(shoppingCart);
//remove
shoppingCart.splice(4,1)
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea")
console.log(shoppingCart);

//number 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

//exercise 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
console.log(ages);
// let minAge = Math.min(...ages);
// let yongest = ages.filter(item => item == min)
// console.log(yongest);


















  
