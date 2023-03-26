var CoffeeMachine = /** @class */ (function () {
    function CoffeeMachine() {
        this.cupsLeft = 0;
    }
    CoffeeMachine.getInstance = function () {
        if (!CoffeeMachine.instance) {
            CoffeeMachine.instance = new CoffeeMachine();
        }
        return CoffeeMachine.instance;
    };
    CoffeeMachine.prototype.refill = function () {
        this.cupsLeft = 2;
    };
    CoffeeMachine.prototype.dispense = function (numCups) {
        if (this.cupsLeft >= numCups) {
            console.log("Here are your ".concat(numCups, " cups of coffee!"));
            this.cupsLeft -= numCups;
        }
        else {
            console.log("Sorry, the coffee machine is empty. Please ask someone to refill it.");
        }
    };
    return CoffeeMachine;
}());
var machine = CoffeeMachine.getInstance();
machine.refill();
machine.dispense(2);
