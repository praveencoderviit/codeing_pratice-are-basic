console.log("hello world!!!") //javascript is syntax on console.log("");  *1

var x=5;
let y=10;
const pi=3.15;
console.log(x)
console.log(y)
console.log(pi)  //declaration using var,let or const /var is mutable/const is immutable **2

let a=2;
let b='abc';
let c=2.5;
let d=true;
console.log(typeof(a)) //integer in datatype (-1,-2,-3,0,1,2,3)
console.log(typeof(b)) //string in datatype  ('abc',@abd)
console.log(typeof(c)) //number in datatype  
console.log(typeof(d)) //boolean in datatype (either true or false)  ***3

let Name ='abc';
let age=20;
let is_student=true;
let person={name:'man',age:20};
let numbers=[1,2,3,4,5];
console.log(Name);
console.log(age);
console.log(is_student);
console.log(person)
console.log(numbers); 
function greet(){
    console.log('hello!')
}                        ///reference types:object,array,function  ****4


let n=20
let h=String(n);
console.log(h)
let g="abc"
let r=Number(g);
console.log(r)  ////type conversion in javascript on data types *****5

let X=5;
let Y=5;
console.log(X+Y) //arithmetic operator:+,-,/,%,//,** so on...
console.log(X==Y)//comparison operator:==,!=,===,!==,<,>,<=,>= so on..
console.log(X+=Y)//assignment operator:+=,-=,/=,%= so on...
console.log(X||Y)//logical operator:&&,||,!..
////operators in working on javascript ******6


//control structures:
//conditional statement:if,else if and else
let na=50;
if(na>0){
    console.log('positive');
}
else if(na<0){
    console.log('negative');
}
else{
    console.log('zero'); 
}

//loops:while,for
for(let i=0;i<5;i++){
    console.log(i);
}

let v = 5;
let string = "";
for (let i = 1; i <= v; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string); //patterns in javascript

//while loop
j=0
while(j<5){
    console.log(j);
    j=j+1;
}               ////finally all control statements in javascript *******7

//break statement
let i;
for (i = 1; i < 100; i++) {
	if (i === 6) {
		break;
	}
}
console.log(i);

//continue statement
let C;
for(C=1;C<10;C++){
    if(C==6){
        continue;
    }
}
console.log(C) ///******8 

//functions in javascript
//.declaration and invocation
function Greet(name){
    console.log('hello',+name+'!');
}
Greet('bunny');

function add(sum){
    console.log('sum',x+y)
}
add(10,5);

//.arrow function on one of the type in javascript function
const Add=(a,b)=>a+b;
console.log(Add(2,3)) /// ********9

//arrays:
//.declaration and manipulation
let meat=['chicken','mutton','fish'];
console.log(meat)
console.log(meat[0])//index on javascript in array
console.log(meat[2])//index on javascript in array

//array methods()-push(),pop(),shift(),unshift(),concat(),join(),slice()
let elements=["praveen",50,true,{name:'pra'}]
elements.push('3.14')
console.log(elements) //add on element are end of the array..

let alphabets=['a','b','c','d']
alphabets.pop('d')
console.log(alphabets) //remove the element are last element in the array

let cinemas=['eagle','salaar','bunny']
cinemas.shift()
console.log(cinemas)//remove the first element in the array

let num=[20,30,50,70]
num.unshift('hello')
console.log(num)// add one or more elements to the beginning of the array

let cricket_score=[169,129,146,170]
let players=["thala","rohit","virat"]
let new_players=cricket_score.concat(players)
console.log(new_players)// add two combine on array

var country=['japan','india','china']
var new_country=country.join("/")
console.log(new_country)//create a new string by concat on all elements of an array

var hotels=['paradise','alpha','rajugaru',20,30,40]
var new_hotels=hotels.slice(0,4)
console.log(new_hotels)//array on index shallow copy of a portion of an array into a new array *******10

//multi dimensional array//
let news=[
    [
    ["jaggu","yash","dinesh"],
    ["aravid","kiran","praveen","prasad"]],
    [10,20,30],
    [40,50,60,70],
    [80,90,100,120,140,160],
]
console.log(news[1]) //one dimensional
console.log(news[1][1])//two dimensional
console.log(news[1][2])
console.log(news[0][0][1])///three dimensional
console.log(news[0][1][2]) //********11 

///what are object
//how to create an object
//how to get values from object

var object = {
    Name:"john",
    location:"india",
    age:20,
}
console.log(object)
console.log(object.Name) //(variable.key)--key on pair of the value in output obn object
console.log(object.age)  //(variable.key)--key on pair of the value in output on object

let games = {
    name_1:"volleyball",
    name_2:"cricket",
    name_3:"kara bela",
    player:function(){
        return "i playing in " + this.name_2
    }
}
console.log(games.player()) ///function passing in argument using object reference ...

var object = {
    Name:"bunny",
    location:"india",
    age:45,
}
console.log(object)
object.age=20          ///(variable.key)---key value modified on object
console.log(object.age)///modified in value using on object
console.log(object)

object.state="andhra pradesh" ///(variable.add key element)---key element on adding in using object
console.log(object.state)    ///adding key value using object
console.log(object)          ////*****12
