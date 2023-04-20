interface UIElement {
    render(): void;
}


abstract class Button implements UIElement {
    protected label: string;

    constructor(label: string) {
        this.label = label;
    }

    public abstract render(): void;
}


class SubmitButton extends Button {
    public render(): void {
        console.log(`<button type="submit">${this.label}</button>`);
    }
}


class CancelButton extends Button {
    public render(): void {
        console.log(`<button type="button">${this.label}</button>`);
    }
}


interface TransactionElement {
    execute(): void;
}


abstract class TradeOrder implements TransactionElement {
    protected symbol: string;
    protected quantity: number;

    constructor(symbol: string, quantity: number) {
        this.symbol = symbol;
        this.quantity = quantity;
    }

    public abstract execute(): void;
}


class BuyOrder extends TradeOrder {
    public execute(): void {
        console.log(`Buying ${this.quantity} shares of ${this.symbol}`);

    }
}


class SellOrder extends TradeOrder {
    public execute(): void {
        console.log(`Selling ${this.quantity} shares of ${this.symbol}`);

    }
}


class TradeForm {
    protected uiElement: UIElement;
    protected transactionElement: TransactionElement;

    constructor(uiElement: UIElement, transactionElement: TransactionElement) {
        this.uiElement = uiElement;
        this.transactionElement = transactionElement;
    }

    public render(): void {
        this.uiElement.render();

    }

    public executeTrade(): void {
        this.transactionElement.execute();
    }
}


const tradeForm = new TradeForm(new SubmitButton("Buy"), new BuyOrder("AAPL", 10));
tradeForm.render();
tradeForm.executeTrade();
