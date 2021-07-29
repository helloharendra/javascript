function add(){
    let a=10;
    let b=20;
    let z=a+b;
    document.write("the addition is    :"+z);
}

function minus(){
    let a=100;
    let b=20;
    let z=a-b;
    document.write("the substraction is   :"+z);
}
function mult(){
    let a=10;
    let b=10;
    let z=a*b;
    document.write("the multiplication is      :"+z);
}
function div(){
    let a=100;
    let b=20;
    let z=a/b;
    document.write(" the division is    :"+z);
}



function add1(){
    var x=10;
     x += 5;
    document.getElementById("demo").innerHTML=x;
}
function minus1(){
    var x=10;
     x -= 5;
    document.getElementById("demo").innerHTML=x;
}
function mult1(){
    var x=10;
     x *= 5;
    document.getElementById("demo").innerHTML=x;
}

function div1(){
    var x=10;
     x /= 5;
    document.getElementById("demo").innerHTML=x;
}
 function string1(){
     let x=10;
     let y="5";
     let z="hello"+5;

     document.getElementById("demo").innerHTML=x +" "+y+" "+z;

 }