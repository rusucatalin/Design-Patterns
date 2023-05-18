interface Handler {
    setNext(handler: Handler): void;
    handleRequest(request: string): void;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): void {
        this.nextHandler = handler;
    }

    handleRequest(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}

class ConcreteHandlerA extends AbstractHandler {
    handleRequest(request: string): void {
        if (request === 'A') {
            console.log("ConcreteHandlerA: Request send");
        } else {
            super.handleRequest(request);
        }
    }
}

class ConcreteHandlerB extends AbstractHandler {
    handleRequest(request: string): void {
        if (request === 'B') {
            console.log("ConcreteHandlerB: Request send.");
        } else {
            super.handleRequest(request);
        }
    }
}

class ConcreteHandlerC extends AbstractHandler {
    handleRequest(request: string): void {
        if (request === 'C') {
            console.log("ConcreteHandlerC: Request send.");
        } else {
            super.handleRequest(request);
        }
    }
}


const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
const handlerC = new ConcreteHandlerC();

handlerA.setNext(handlerB);
handlerB.setNext(handlerC);


const requestA = 'A';
handlerA.handleRequest(requestA);


const requestB = 'B';
handlerA.handleRequest(requestB);


const requestC = 'C';
handlerA.handleRequest(requestC);
