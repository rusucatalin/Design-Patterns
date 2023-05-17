abstract class Command {
    abstract execute(): void;
    abstract undo(): void;
}

class CookCommand extends Command {
    constructor(private readonly dish: string) {
        super();
    }

    execute(): void {
        console.log(`Cooking ${this.dish}`);
    }

    undo(): void {
        console.log(`Cancel cooking ${this.dish}`);
    }
}

class Order {
    private readonly commands: Command[] = [];

    constructor(private readonly dish: string) {
        this.commands.push(new CookCommand(dish));
    }

    placeOrder(): void {
        console.log(`Placing order for ${this.dish}`);
        this.commands.forEach(command => command.execute());
        CommandHistory.add(this.commands);
    }

    cancelOrder(): void {
        console.log(`Canceling order for ${this.dish}`);
        this.commands.slice().reverse().forEach(command => command.undo());
    }
}

class CommandHistory {
    private static readonly history: Command[][] = [];

    static add(commands: Command[]): void {
        this.history.push(commands);
    }

    static undo(): void {
        const lastCommands = this.history.pop();
        if (lastCommands) {
            console.log('Undoing last order');
            lastCommands.slice().reverse().forEach(command => command.undo());
        } else {
            console.log('No orders to undo');
        }
    }
}



const order1 = new Order('Pizza');
order1.placeOrder();

const order2 = new Order('Pasta');
order2.placeOrder();

CommandHistory.undo();
