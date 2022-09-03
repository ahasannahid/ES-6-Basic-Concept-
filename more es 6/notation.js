const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 55000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 35000},
];

const student ={
    name: 'Nahid',
    age: 24,
    class: 'Graduate',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },
}
// dot notation
const marks = student.marks.math
console.log(marks);

// bracket notation
const chemistry = student['marks'] ['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject]
console.log(chemistry);
console.log(subjectMarks);