class CoffeeMachine {
  private static instance: CoffeeMachine;
  private cupsLeft: number = 0;

  private constructor() {}

  public static getInstance(): CoffeeMachine {
    if (!CoffeeMachine.instance) {
      CoffeeMachine.instance = new CoffeeMachine();
    }
    return CoffeeMachine.instance;
  }

  public refill(): void {
    this.cupsLeft = 2;
  }

  public dispense(numCups: number): void {
    if (this.cupsLeft >= numCups) {
      console.log(`Here are your ${numCups} cups of coffee!`);
      this.cupsLeft -= numCups;
    } else {
      console.log(
        "Sorry, the coffee machine is empty. Please ask someone to refill it."
      );
    }
  }
}

const machine = CoffeeMachine.getInstance();
machine.refill();
machine.dispense(2);
