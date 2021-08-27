function myFunction(){
  let  Nm='hello we are gooing to use java script tampletes';
    return Nm;
}
function quotesInside(){
    let txt='I am a "student "it is all `about` me'
    return txt;

}
function multiLine(){
    let txt=`Since 2005, wikiHow has helped billions of
    people to learn how to solve problems large and small.
     We work with credentialed experts,
    a team of trained researchers, 
    and a devoted community to create the most reliable, 
    comprehensive and delightful how-to content on the Internet.
   Authoritative
   90,000 academically researched articles'`;
   return txt;
  
   
}

function myFunction2(){
    let firstName = "Harendra";
let lastName = "Prajapati";

let text = `Welcome ${firstName}, ${lastName}!`;
return text;
}

function myFunction3(){
    let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
return total;

}
function myFunction4(){
    let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
return html;
}