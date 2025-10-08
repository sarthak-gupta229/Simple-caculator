// let age= 17;
// if (age>18){
//     console.log("you can vote");
// } else if (age>70){
//     console.log("To old to Vote");
// } else {
//     console.log("you cannot vote");
// }

// for (let i=0; i<100; i++){
//     console.log(i);
// }
// for (let i=100; i>0; i--){
//     console.log(i);
// }
// for (let i=0; i<100; i=i+1){
//     console.log(i);
// }

// function func(x){
//     console.log(5);
// }
// func();
// alert("Hello");
// confirm("Are you 18+ ?"); //add pop up with ok and cancel button
// var conf=confirm("Are you 18+ ?");
// alert(conf);

// var conf=prompt("Are you 18+ ?"); //stores the value entered by user input box
// alert(conf);

// var conf1=prompt("give first number"); 
// var conf2=prompt("give second number");
// alert(Number(conf1) +(conf2));

// var myname=prompt("give your name");
// alert(`Hello my name is ${myname}`);

// var conf1=prompt("give first number"); 
// var conf2=prompt("give second number");
// alert(Number(conf1) + Number(conf2));

function calculate(){
    let userinput= document.getElementById("expression").value;
    if (userinput.includes("+")){
        var a=userinput.split("+");
        let output= Number(a[0])+(Number(a[1]));
        document.getElementById("result").innerText= output;
        console.log(Number(a[0])+(Number(a[1])));
    } else if (userinput.includes("-")){
        var a=userinput.split("-");
        let output= Number(a[0])-(Number(a[1]));
        document.getElementById("result").innerText= output;
        console.log(Number(a[0])-(Number(a[1])));
    } else if (userinput.includes("*")){
        var a=userinput.split("*");
        let output= Number(a[0])*(Number(a[1]));
        document.getElementById("result").innerText= output;
        console.log(Number(a[0])*(Number(a[1])));
    } else if (userinput.includes("/")){
        var a=userinput.split("/");
        let output= Number(a[0])/(Number(a[1]));
        document.getElementById("result").innerText= output;
        console.log(Number(a[0])/(Number(a[1])));
    }  else {
        console.log("Invalid operation");
    }
}