class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    responsibilities() {

    }
    work() {
        return `${this.name} do ${this.responsibilities()}`;
    }
    getPaid() {
        return `${this.name} have salary ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'Create application';
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'Write tests';
    }
}

const dev = new Developer('Alex', 100000);
console.log(dev.getPaid()); // Alex have salary 100000
console.log(dev.work()); // Alex do Create application

const tester = new Tester('Ben', 90000);
console.log(tester.getPaid()); // Ben have salary 90000

