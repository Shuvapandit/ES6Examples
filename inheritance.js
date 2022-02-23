class Support{
    name;
    
    id=3;
    address;
    constructor (name,adrs){
        this.name=name;
        this.address=adrs;
    }

    startsession(){
        console.log(this.name,"Stat a support session")
    }
  
  
  
}
/* To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class */

class Support2 extends Support{
     postcode=444;
     groupsupportTime;
     constructor(name,adrs,time){
         super(name,adrs)
         this.groupsupportTime=time;
     }

    
        
}
class Support3 extends Support2{
    constructor(name,adrs,time,sdle){
      super(name,adrs,time)
        this.sdle=sdle;
    }

}


const x=new Support3('shuva','America',22.20,'Day')
const y=new Support3('y','BD',11.00,'Night')
console.log(x)
console.log(y)