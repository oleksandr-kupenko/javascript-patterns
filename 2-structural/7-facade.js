class Complaints {
    constructor() {
       this.complaints = [];
    }

    replay(complaint) {}

    add(complaint) {
        this.complaints.push(complaint);
        return this.replay(complaint);
    }
}

class ProductComplaints extends Complaints {
    replay({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Complaints {
    replay({id, customer, details}) {
        return `Service: ${id}: ${customer} (${details})`
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        //здесь можно создавать дополнительные данные, которые привяжутся к основным
        const id = Date.now().toString();
        let complaint;

        if (type === 'service') {
            complaint = new ServiceComplaints;
        } else {
            complaint = new ProductComplaints;
        }

        return complaint.add({id, customer, details});
    }
}

const registry = new ComplaintRegistry();
console.log(registry.register('Alex', 'service', 'Not available'));
console.log(registry.register('Kolyan', 'produce', 'See error'));
