function myFunction(){
    const cars=['bmw','rolls royce ','audi'];
return "the element before sorting is-----"+' '
+cars+       "---- the element after sorting  is   -----      "
+ cars.sort() +" ----the 0 index is"+ cars[0] 
 +"---- the length of array is---- "+cars.length
 +"-----the last element of string is----"+cars[cars.length-1];
}

function ArrayLoop(){
    const cars=['bmw','rolls royce ','audi'];
    let carLen=cars.length;
let txt='</ul>';
for (let i=0;i<carLen;i++);
a=txt +="<li>"+cars[i]+"</li>";
b=txt +="</ul>";
return b;
}