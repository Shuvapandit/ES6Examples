const bottle={color:'green', Tk:30, iscleaned: true };
//getting all porperties name
const keys = Object.keys(bottle);
console.log(keys); 
//getting all values
const vlu= Object.values(bottle)
console.log(vlu);

const pairs=Object.entries(bottle)
console.log(pairs)
//can't delete obj porperties only modify porperty values
// Object.seal(bottle)

//could not change anything
Object.freeze(bottle)
bottle.Tk=400; 
//delete porperties
delete bottle.iscleaned;
console.log(bottle)