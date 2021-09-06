function toString0(){
    let x = 123;
y=x.toString();            // returns 123 from variable x
return y;
}
function toString1(){
    let x = 123;

z=(123).toString();        // returns 123 from literal 123

return z;
}
function toString2(){
    let x = 123;

z=(123).toString();        // returns 123 from literal 123

return z;
}

function toExponent0(){
    let x = 9.656;
y=x.toExponential(2);     // returns 9.66e+0
return y;
}

function toExponent1(){
    let x = 9.656;
z=x.toExponential(4);     // returns 9.6560e+0
return z;
}

function toExponent2(){
    let x = 9.656;
t=x.toExponential(6);     // returns 9.656000e+0
return t;
}
function toFix0(){
    let x = 9.656;
a=x.toFixed(0);           // returns 10
return a;
}

function toFix1(){
    let x = 9.656;
b=x.toFixed(2);           // returns 9.66
return b;
}


function toFix2(){
    let x = 9.656;
c=x.toFixed(4);           // returns 9.6560
return c;
}


function toFix3(){
    let x = 9.656;
d=x.toFixed(6);           // returns 9.656000
return d;
}
