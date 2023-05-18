interface Mediator {
    sendMessage(message: string, sender: Colleague): void;
    register(colleague: Colleague): void;
}


abstract class Colleague {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    abstract receiveMessage(message: string): void;
    abstract send(message: string): void;
}


class ConcreteMediator implements Mediator {
    private colleagues: Colleague[] = [];

    register(colleague: Colleague): void {
        this.colleagues.push(colleague);
    }

    sendMessage(message: string, sender: Colleague): void {
        this.colleagues.forEach((colleague) => {
            if (colleague !== sender) {
                colleague.receiveMessage(message);
            }
        });
    }
}


class ConcreteColleague extends Colleague {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    receiveMessage(message: string): void {
        console.log(`message received: ${message}`);
    }

    send(message: string): void {
        console.log(`message sent: ${message}`);
        this.mediator.sendMessage(message, this);
    }
}


const mediator: Mediator = new ConcreteMediator();

const colleague1: Colleague = new ConcreteColleague(mediator);
const colleague2: Colleague = new ConcreteColleague(mediator);

mediator.register(colleague1);
mediator.register(colleague2);

colleague1.send("Hi fantastic!");
colleague2.send("Cocacolastic!");
