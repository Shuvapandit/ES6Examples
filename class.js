class Support{
    name;
    
    id=3;
    address;

    startsession(){
        console.log(this.name,"Stat a support session")
    }
  /*   A constructor is a function that is called each time an object is created (also referred to as instantiated). The User constructor creates the properties of the object (this.name, this.age, this.email) and assigns them the value of the parameters passed to it (name, age, email). */
  constructor (name,adrs){
      this.name=name;
      this.address=adrs;
  }
}
const x= new Support('shuva chakraborty','BD');
const y= new Support('Y chakraborty','England');
x.startsession();
y.startsession()
 console.log(x,y)
