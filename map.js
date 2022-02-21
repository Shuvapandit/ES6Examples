const numbers=[3,33,4,5,6,7,8]
/* const doubleit=number=>number*2;
 const output =[];
 for (const number of numbers)
{
    const result = doubleit(number)
    output.push(result)
} */  

/* Map:
A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration. */

 const output=numbers.map(number=>number*2);
console.log(output)
const  squares=numbers.map(x=>x*x);
console.log(squares) 
const friends= ['shuva ','shuva chakraborty ','Nipa chakraborty']
const flength=friends.map(friend=>friend.length)
console.log(flength)
const products=[
    {name:'water glass',price:200,color:'white'},
    {name:'Orange',price:20,color:'Orange'},
    {name:'mobile',price:20000,color:'green'},
    {name:'Fan',price:400,color:'red'},
    {name:'Tv',price:200000,color:'Blue'},
    
]
const productsName=products.map(product=>product.name)
console.log(productsName)
