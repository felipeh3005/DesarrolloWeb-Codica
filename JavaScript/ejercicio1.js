const student = {
    name: 'juan',
    age: '36',
    courses: ['matematicas','español','biologia']
}
student.name = 'felipe';
student.apellido = 'higuita';
delete student.age;

console.log(student);

const addCourse = (newCourse) => {
    student.courses.push(newCourse);
}

