//------------------------------------------------------------Task 1 ------------------------------------------------------------//

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    print() {
        return `Name: ${this.name} \nSurname: ${this.surname}`
    }

}

let human = new Person('Asadbek', 'Ergashbaev')
// console.log(human.print());




//------------------------------------------------------------Task 2 ------------------------------------------------------------//


class User extends Person {

    #password = '123';

    constructor(name, surname, password) {
        super(name, surname, password);
        // this.#password = password
    }

    print() {
        if (correctPassword == this.#password) {
            return `Name: ${name} \nSurname: ${surname} \nPassword: ${this.#password}`
        }else {
            return 'Wrong Password !'
        }
    }
}

let name = prompt('Enter your name.')
let surname = prompt('Enter your surname.')
let correctPassword = prompt('Enter the correct password.')

let result = new User(name, surname, correctPassword)
console.log(result.print());