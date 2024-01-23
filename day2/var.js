let challenge ='30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length-1);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3,7));
console.log(challenge.substr(2,19));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(' '));
let string='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(string.split(' ,'));
console.log(challenge.replace('JavaScript','python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf("a"));
let sentence='You cannot end a sentence with because because because is a conjunction';
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search("because"));
console.log(challenge.trim());
console.log(challenge.startsWith(30));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match('a'));
let days = '30 Days of'
console.log(days.concat(" JavaScript"));
console.log(challenge.repeat(2));
//exercise:level 2
let quote= 'There is no exercise better for the heart than reaching down and lifting people up. by John Holmes teaches us to help one another.'
console.log(quote);
let quote2="Love is not patronizing and charity isnt about pity, it is about love. Charity and love are the same  with charity you give love, so dont just give money but reach out your hand instead.";
console.log(quote2);
let num = '10'
console.log(typeof '10')
let numInt = parseInt(num)
console.log(numInt);
let num2 = '9.8'
let numFloat = parseFloat(num2)
console.log( numFloat + 0.2);
let combine='python & jargon'
console.log(combine.match('on'));
let course='I hope this course is not full of jargon';
console.log(course.match('jargon'));
let randomNum = Math.random()         
let numBtnZeroAndHundred = randomNum * 101;
let randomNumRoundToFloor=Math.floor(numBtnZeroAndHundred);
console.log(randomNumRoundToFloor);
let random=Math.random() * 50 + 50;
const click =random>= 50 ?random :100;
console.log(click.toFixed(1));
let randomNumb = Math.random()         
let numBtnZeroHundred = randomNum * 225;
let randomNumbRoundToFloor=Math.floor(numBtnZeroHundred);
console.log(randomNumbRoundToFloor);
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
let sentence2='You cannot end a sentence with because because because is a conjunction'

console.log(sentence2.substr(31,23));
//exercise 3
let text='Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(text.match('/love/gi'));
console.log(sentence2.match('/because/gi'));

const sentences='%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let regEx = /[!@#$%&;]/g
console.log(sentences.replace(regEx, ''));
let monthlyIncome=5000*12
let annualBonus=1000
let monthlyCourses=15000*12
console.log(monthlyIncome + annualBonus + monthlyCourses);






 






 






