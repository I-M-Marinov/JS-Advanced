// Extend the Person and Teacher from the previous task and add a class Student inheriting from Person with additional property course. 
// Add toString() functions to all classes, the formats should be as follows:

// · Person - returns "Person (name: {name}, email: {email})"
// · Student - returns "Student (name: {name}, email: {email}, course: {course})"
// · Teacher - returns "Teacher (name: {name}, email: {email}, subject: {subject})"

// Try to reuse code by using the toString() function of the base class.

// Input / Output

// There will be NO input. Your function should return an object containing the classes Person, Teacher, and Student.


function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString(){
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString(){
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person{
        constructor(name,email,course){
            super(name,email);
            this.course = course;
        }

        toString(){
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

const createInstance = personAndTeacher();

const myperson = new createInstance.Person('Person', 'someone@gmail.com');
const myteacher = new createInstance.Teacher('Gosho Ot Pochivka', 'gosho@skochiLosho.bg', 'Music');
const mystudent = new createInstance.Student('Eminem', 'marshall@slim-shady.com', '666');

console.log(myperson.toString());
console.log(myteacher.toString());
console.log(mystudent.toString());