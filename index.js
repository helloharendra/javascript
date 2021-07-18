//this is my first javascript code!
console.log("hello harendra");
    
let name="harendra prajapati"
console.log(name);

let firstName="harendra";
let lastName="prajapati";
console.log(firstName,lastName)


let myName="harendra" //string literal
let age="21"// number literal
let isApproved=true; //boolean literal
let firstName1="undefined"
let setColor=null;

let person ={
    name: 'harendra prajapati', age:21
};

person.name="viruss";
person['name']="godhunter";
console.log(person);

let selectedColors=['red','green','blue'];
console.log(selectedColors);
console.log(selectedColors[0]);

selectedColors[2]='143';
console.log(selectedColors);
console.log(selectedColors.length);

function harry()//creating a  function
{
console.log("hello harry");
};

harry();//function call
function harendra(name)
{
    console.log('hello '+name);
};
harendra('harendra');
harendra('baby');

function harendra1(name,lastName)//perform a task
{
    console.log('hello '+name+' '+ lastName);
};
harendra1('baby','khushboo');
harendra1('bahut hot','ho tum');
function square(number)//perform a calculation
{
return number*number;
}
console.log(square(2));

