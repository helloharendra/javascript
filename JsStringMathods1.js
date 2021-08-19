function myStr(){
    str="this is harendra";
    return str;
}
function myStr1(){
    str1="this is harendra";
    str2=str1.toUpperCase();

    return str2;
}

function myStr2(){
    str3="THIS IS HARENDRA";
    str4=str1.toLowerCase();

    return str4;
}

function myConcat(){
    text1="this is harendra";
    text2="student at bbd univercity"
    text3=text1.concat(" "+text2);
    return text3;
}

function myConcat1(){
    text1="this is harendra prajapti"
    text2="he is student at bbd univercity"
    text3="hello".concat("  "+text1+"  "+text2);
    return text3;
}
function myTrim(){
    text1="               this is harendra prajapti         "
    text2=text1.trim();
    return  text2;

}

function myPadding(){
    text1="5";
    text2=text1.padStart(4,0);
    return text2;
}
function myPadding1(){
    text1="5";
    text2=text1.padEnd(4,0);
    return text2;
}
function mycharAt(){
    text1="harendra";
    text2=text1.charAt(0);
    return text2;
}

function mycharCode(){
    text1="harendra";
    text2=text1.charCodeAt(0);
    return text2;
}
function myFunction(){
    text1="harendra";
    text2=text1[0];
    return text2;
}

function myFunction1(){
    text1="harendra,prajapati";
    text2=text1.split(",");
    return text2;
}
function myFunction2(){
    text1="harendra prajapati";
    text2=text1.split(" ");
    return text2;
}
function myFunction3(){
    text1="harendra|prajapati";
    text2=text1.split("|");
    return text2;
}
function myFunction4(){
    text1="harendra";
    text2=text1.split("");
    return text2;
}