function Function1(a1 , a2){
    return a1+a2;
}
document.getElementById("demo1").innerHTML=Function1(5,4);

function Function2(b1,b2) {
    return b1-b2;
}
document.getElementById("demo2").innerHTML=Function2(100,10);

function Function3(c1,c2) {
    return c1*c2;
}
document.getElementById("demo3").innerHTML=Function3(20,10);

function Function4(d1,d2) {
    return d1/d2;
    
}
document.getElementById("demo4").innerHTML=Function4(2000,20);

var x=Function5(5,100);
document.getElementById("demo5").innerHTML=x;
function Function5(a,b){
    return a*b;
}

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  document.getElementById("demo6").innerHTML = toCelsius(77);