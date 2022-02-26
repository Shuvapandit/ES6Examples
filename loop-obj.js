//for in for object
const student=
{name:'Shuva', Id:3, isvalidstudent: true };
for(const prop in student){
    console.log(prop,student[prop])
}
//for of for Array
const keys =Object.keys(student)
for (const prop of keys){
    console.log(prop,student[prop])
}