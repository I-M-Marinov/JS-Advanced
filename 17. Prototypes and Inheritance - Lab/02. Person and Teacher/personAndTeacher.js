// Write a class Person and a class Teacher which extends Person.

// · The Person class should have a name and an email
// · The Teacher class should have a name, an email, and a subject

// Input / Output

// There will be NO input. Your function should return an object containing the classes Person and Teacher.

function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}