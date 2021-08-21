function myFunction1(){
    txt1="this is harendra student at bbd university";
 return txt1.indexOf("is");
}
// document.getElementById('demo').innerHTML=myFunction1();


function myFunction2(){
    txt1="this is harendra student at bbd university";
 return txt1.lastIndexOf("is");
}
// document.getElementById('demo').innerHTML=myFunction1();

function myFunction3(){
    txt1="this is harendra student at bbd university";
 return txt1.indexOf("john");
}
// document.getElementById('demo').innerHTML=myFunction1();


function myFunction4(){
    txt1="this is harendra student at bbd university";
 return txt1.lastIndexOf("doe");
}
// document.getElementById('demo').innerHTML=myFunction1();

function myFunction5(){
    txt1="this is harendra student at bbd university, this is all about me";
 return txt1.indexOf("is",4);
}
// document.getElementById('demo').innerHTML=myFunction1();

function myFunction6(){
    txt1="this is harendra student at bbd university, this is all about me";
 return txt1.lastIndexOf("is",40);
}
// document.getElementById('demo').innerHTML=myFunction1();

function myFunction7(){
    txt1="this is harendra student at bbd university, this is all about me";
 return txt1.search("is");
}
// document.getElementById('demo').innerHTML=myFunction1();

function myFunction8(){
    txt1="this is harendra student at bbd university, this is all about me";
 return txt1.match(/is/g);
}
// document.getElementById('demo').innerHTML=myFunction1();

function myFunction9(){
    txt1="this is harendra student at bbd university, this is all about me";
 return txt1.includes("is");
}
// document.getElementById('demo').innerHTML=myFunction1();
function myFunction10(){
    txt1="this is harendra student at bbd university, this is all about me";
 return txt1.includes("harendra",50);
}
// document.getElementById('demo').innerHTML=myFunction1();
function myFunction11(){
    txt1="this is harendra student at bbd university, this is all about me";
 return txt1.startsWith("this");
}

function myFunction12(){
    txt1="this is harendra student at bbd university, this is all about me";
 return txt1.endsWith("me");
}