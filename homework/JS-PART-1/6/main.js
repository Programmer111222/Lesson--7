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



class User extends Person {

    #password = 'showname123';

    constructor(name, surname, password) {
        super(name, surname, password);
        this.#password = password   
    }

    print(password) {
        let name = prompt('Enter your name.')
        let surname = prompt('Enter your surname.')
        let correctPassword = prompt('Enter the correct password.')

        if (correctPassword === password) {
            return `Name: ${name} \nSurname: ${surname}`
        }else {
            return 'Wrong Password !'
        }
    }
}

let result = new User('Yusuf', 'Davydov', 'show it to me')
console.log(result.print());
