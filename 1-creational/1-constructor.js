// **** Old syntax (with prototype extension) ****

function Server(name, ip) {
    this.name = name;
    this.ip = ip;
}

Server.prototype.getUrl = function () {
    return `https://${this.ip}:80`;
}

const aws = new Server('AWS German', '82.21.21.32');
console.log(aws.getUrl()); // https://82.21.21.32:80

// **** Modern syntax ****
class Server2 {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:80`;
    }
}
const aws2 = new Server2('AWS German', '82.21.21.32');
console.log(aws2.getUrl()); //https://82.21.21.32:80
