function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.getName = function () {
        return this.name;
    };

    this.getAge = function () {
        return this.age;
    };

    this.getGender = function () {
        return this.gender;
    };

    this.showDetails = function () {
        console.log(
            `${this.getName()} is a Person with age ${this.getAge()} and gender ${this.getGender()}`
        );
    };
}

let person = new Person("Aman", 27, "M");
person.showDetails();

function Teacher(name, age, gender, subject) {
    Person.call(this, name, age, gender);
    this.subject = subject;

    this.getSubject = function () {
        return this.subject;
    };

    this.showDetails = function () {
        console.log(
            `${this.getName()} is a Person with age ${this.getAge()} and gender ${this.getGender()} and subject ${this.getSubject()}`
        );
    };
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

let teacher = new Teacher("Amandeep", 27, "Male", "Maths");

teacher.showDetails();
