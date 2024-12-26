let obj = {
    name: 'Arsen',
    print: function () {
        return 'Hello'
    },
}

class Person {
    #password = 'Logo1997'; // приватные поля
    static agePerson = 65 //статичные поля

    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.#password = this.#checkPassword(password);
        // this.#randomPass = this.#randomPass(password)
    }

    print() {
        return `Name: ${this.name} \nAge: ${this.age}`
    }
    showPrivate() {
        return `Private: ${this.#password}`
    }

    #randomPass() {
        let len = 8;
        let res = '';
        const word = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(let i = 0; i <= len; i++){
            const rand = Math.floor(Math.random() * word.length)
            res += word[rand]
        }
        return res;
    }

    #checkPassword(password) {   // приватные функции
        if ((password + '').length > 8) {
            return password;
        } else {
            return this.#randomPass();
        }
    }
    
    static statMethod() { // статичные методы
        return `${this.agePerson}`;
    }

    get password() {
        return this.#password // возвращает приватный пароль
    }

    set password(password) {
        return this.#password = password; // изменяет приватный пароль
    }
}


let user = new Person('Asadbek', 20, 'bbc');
console.log(obj.print());
console.log(user.print());
console.log(user);
console.log(Person.agePerson);
Person.agePerson = 80;
console.log(Person.statMethod());

user.password = 'password123456'
console.log(user.password);

class Men extends Person {

    constructor(name, age, password, group){
        super(name, age, password);
        this.group = group;
    }

    print() {
        return `Name: ${this.name} \nAge: ${this.age} \nGroup: ${this.group}`
    }
}

let boy = new Men('Atrey', 19, 'GodOfWar2016', '30-1f');
console.log(boy);
console.log(boy.print());


// class Citizen {
//     constructor(name, surname, nameWork, capital) {
//         this.name = name;
//         this.surname = surname;
//         this.nameWork = nameWork;
//         this.capital = this.#capital(capital);
//     }

//     resident() {
//         return `Surname: ${this.surname} \nName: ${this.name} \nNameWork: ${this.nameWork}`
//     }

//     #capital(capital) {
//         if(capital <= 30000){
//             console.log(`обычный сотрудник`);
//             return capital
//         }else if(capital <= 100000) {
//             console.log(`элитный сотрудник`);
//             return capital
//         }else {
//             console.log(`мажор`);
//             return capital
//         }
//     }

// }

// let worker = new Citizen('John', 'Johnson', 'IT-specialist', 3)
// console.log(worker.resident());
