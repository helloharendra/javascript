function myfunction1(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    a=fruits.toString();
    return a;
}
function myfunction2(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    a=fruits.join('*');
    return a;
}
function myfunction3(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    a=fruits.pop();
    return a;
}

function myfunction4(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    a=fruits.push("capsicum");
    return fruits; //returns the new pushed array
    //return a;       //returns the array size
}
function myfunction5(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    a=fruits.shift();
    return a;
}
function myfunction6(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    a=fruits.unshift();
    return a;
}

function myfunction7(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    a=fruits[0]="papaya";
    return a;
}

function myfunction8(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    a=fruits[fruits.length]="kiwi";
    return a;
}
function myfunction9(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    a=fruits.splice(2, 0, "man", "joy");
    return fruits;
}
function myfunction10(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    a=fruits.splice(2, 2, "man", "joy");
    return fruits;
}

function myfunction11(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const flowers=["rose","lotus"];
    const all=fruits.concat(flowers);
    return all;
}
function myfunction12(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const flowers=["rose","lotus"];
    const boys=["ram","monu","sonu"];
    const all=fruits.concat(flowers,boys);
    return all;
}
function myfunction13(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const flowers=["rose","lotus"];
    const all=fruits.concat('ram');
    return all;
}
function myfunction14(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const a=fruits.slice(1);
    return a;
}
function myfunction15(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const a=fruits.slice(3);
    return a;
}
function myfunction16(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const a=fruits.slice(1,3);
    return a;
}
function myfunction17(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const a=fruits.toString();
    return a;
}
function myfunction18(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const a=fruits;
    return a;
}