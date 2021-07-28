function Varriable1(){
    x=10;
    y=20;
    z=x+y;
    document.write("The sum of x and y is   :"+z);
}

function Varriable2(){
    var a=10;       //varriable declared as var may be redeclare 
    var b=20;
    var c="the sum is:"
    sum1=c+a+b;
    document.write(sum1);
}
function Varriable3(){
    $="my name is   :";
    fname="harendra   ";
    lname="prajapati";
    all1=$+fname+lname;
    document.write(all1);
}
function Varriable4(){
   var num=10;
    {
      var  num=20;
    }
    document.write(num);     /* have not a block scope here outpot will be 20  but whenwe use let keyword to assign
                                 a varriable it removes this problem.*/
}

function Varriable5(){
    let num=10;
    {
        let num=20;
    }
    document.write(num);  /*here outpot will be 10 have a block scope*/

    }
     
     function Varriable6(){
         const a=100;        //can not be redeclare ,reassigned,have a block scope
         document.write("The value of a is"+a);
    }
     
    function const1(){
        // You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
document.write("cars are before adding         :"+cars);

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

document.write("cars are after adding         :"+cars);

    }

    function const2(){
        // You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

document.write(",this added"+car);
    }