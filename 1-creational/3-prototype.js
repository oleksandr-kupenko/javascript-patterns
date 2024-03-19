const car = {
    wheels: 4,

    init() {
        console.log(`I have 4 wheels, my owner is ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Jon'
    }
});

console.log(carWithOwner.__proto__ === car); // true
carWithOwner.init();
