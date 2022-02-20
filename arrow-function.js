
/*  //function expression
const add =function add(num1,numb2){
    return num1+numb2;
}
console.log(add(10,12))

//function expression(annonymous)
const addnew=function (nam1,nam2)
{
    return nam1+nam2;
}
const sum =addnew(10,1)

console.log(sum); */

//arrow function 
const add = (num1,num2) => num1+num2;
const sum=add(12,14);
console.log(sum)
//you can call arrow function without any parameter for one parameter
const fivestimes=num =>num *5;
const multiply=fivestimes(12);
console.log(multiply)

const getname=()=>'shuva';
const v=getname();
console.log(v);

const domath=(p,k)=>{
    const add=p+k;
    const minus=p-k;
    const result=add*minus;
    const output=result*20;
    return output;
}
const outputIS=domath(3,2);
console.log(outputIS);