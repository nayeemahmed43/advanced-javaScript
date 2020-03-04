const student = [
    {id:32,name: 'Karim'},
    {id:22,name: 'Vazquez'},
    {id:53,name: 'Florezi'},
    {id:15,name: 'Julian'}
]

const arr = [];
for(let i=0; i<student.length; i++){
    const element = student[i].name;
    arr.push(element);
}
console.log(arr);

const names = student.map(s => s.name);
const ids1 = student.find(s => s.id>30);
const ids2 = student.filter(s => s.id>30);
console.log(names);
console.log(ids1);
console.log(ids2);