const numbers=[5,6,10,20,30,40,50,60,70]
const bigNumbers=numbers.filter(number=>number>20);
const smallNumbers=numbers.filter(number=>number<20);
console.log(smallNumbers)
const products=[
    {name:'water glass',price:200,color:'white'},
    {name:'Orange',price:20,color:'Orange'},
    {name:'mobile',price:20000,color:'green'},
    {name:'Fan',price:400,color:'red'},
    {name:'Tv',price:200000,color:'Blue'},
    
]
//const expensive=products.filter(product=>product.price>400)
const clr=products.filter(product=>product.color=='green')
const clr2=products.find(product=>product.color=='yellow')
const clr3=products.find(product=>product.color=='green')
console.log(clr3)