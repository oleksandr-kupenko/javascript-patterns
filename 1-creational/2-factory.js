class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        // здесь можно переменную member еще и как-то модифицировать (добавить метаданные, вспомогательные методы и т.п.)
        member.type = type;
        member.define = function () {
            console.log(`${this.name} (${this.type}) : ${this.cost}`)
        }
        return member;
    }
}

const factory = new MemberFactory();
const members = [
  factory.create('Alex', 'simple'),
  factory.create('Kolyan', 'premium'),
  factory.create('Tolik', 'standard')
];

members.forEach(m => m.define());
