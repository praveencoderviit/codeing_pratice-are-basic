var a="apple"
console.log(a)

let b=123
console.log(b)

const c=3.14
console.log(c)

document.write("hello everyone good morning guys <br><br>")

document.write("12334455")

document.write("<h1>practice in html and javascript</h1> <br>")
 
let fruits =["orange",123,{name:'pra',age:'20'},3.14]
console.log(fruits)

const games={
    cricket:"Dhoni",
    football:"ronal"
}
console.log(games)
console.log(typeof(games))



//dialog boxes
//alter,prompt,confirm



var a=confirm("are you a men")

if(a){
    let b=prompt(" please enter your name")
    let c=prompt("please enter your name")
    document.write("hello sir." +  c  + "welcome to my web page","<br> <br>");
    document.write("hello sir." +  b  + "welcome to my web page");
}
else{
    let b=prompt("please enter your name")
    let c=prompt("please enter your name")
    document.write("hello sir." +  c  + "welcome to my web page","<br> <br>");
    document.write("hello sir." +  b  + "welcome to my web page");
}