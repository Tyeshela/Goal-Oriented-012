class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    setFirstName(name) {
        if (name !== '') this._firstName = name;
        else console.log("Invalid first name.");
    }

    setLastName(name) {
        if (name !== '') this._lastName = name;
        else console.log("Invalid last name.");
    }

    setAge(age) {
        if (age > 0) this._age = age;
        else console.log("Invalid age.");
    }

    getFirstName() {
        return this._firstName;
    }

    getLastName() {
        return this._lastName;
    }

    getAge() {
        return this._age;
    }
}