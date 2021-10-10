function myFunction(){
    const fruits=['orange','banana','apple',"guavava"];
    a=fruits.sort();
    return a;
}
function myFunction1(){
    const fruits=['orange','banana','apple',"guavava"];
    a=fruits.reverse();
    return a;
}
function myFunction2(){
    const points=['40','101','1','5','25','10'];
    a=points.sort();
    return a;

}

function myFunction3()   
{
    const points=['40','101','1','5','25','10'];
    a=points.sort(function(a, b){return a - b});     //better mathod for sorting in accending order
    return a;

}
function myFunction4()   
{
    const points=['23','40','10','0','55','22']
    a=points.sort(function(a, b){return b - a});     //better mathod for sorting in decending order
    return a;

}
function myFunction5()   
{
    const points=['23','40','10','0','55','22']
    a=points.sort(function(a, b){return 0.5 - Math.random()});     // sorting in random order
    return a;

}
