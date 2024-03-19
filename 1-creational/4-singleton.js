class Database {

    constructor(data) {
        if (Database.exist) {
            return Database.instance;
        }
        Database.instance = this;
        Database.exist = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData()); // MongoDB

const mysql = new Database('MySQL');
console.log(mysql.getData()); // MongoDB (not MySQL)
