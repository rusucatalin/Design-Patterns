// Definirea interfeței mediatorului
interface Mediator {
    sendMessage(message: string, sender: Colleague): void;
    register(colleague: Colleague): void;
}

// Clasa abstractă pentru colegi (componente)
abstract class Colleague {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    abstract receiveMessage(message: string): void;
    abstract send(message: string): void;
}

// Implementarea mediatorului
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

// Implementarea unui coleg concret
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

// Utilizarea sablonului Mediator
const mediator: Mediator = new ConcreteMediator();

const colleague1: Colleague = new ConcreteColleague(mediator);
const colleague2: Colleague = new ConcreteColleague(mediator);

mediator.register(colleague1);
mediator.register(colleague2);

colleague1.send("Hello World!");
colleague2.send("?");
