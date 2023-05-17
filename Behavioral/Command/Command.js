var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Command = /** @class */ (function () {
    function Command() {
    }
    return Command;
}());
var CookCommand = /** @class */ (function (_super) {
    __extends(CookCommand, _super);
    function CookCommand(dish) {
        var _this = _super.call(this) || this;
        _this.dish = dish;
        return _this;
    }
    CookCommand.prototype.execute = function () {
        console.log("Cooking ".concat(this.dish));
    };
    CookCommand.prototype.undo = function () {
        console.log("Cancel cooking ".concat(this.dish));
    };
    return CookCommand;
}(Command));
var Order = /** @class */ (function () {
    function Order(dish) {
        this.dish = dish;
        this.commands = [];
        this.commands.push(new CookCommand(dish));
    }
    Order.prototype.placeOrder = function () {
        console.log("Placing order for ".concat(this.dish));
        this.commands.forEach(function (command) { return command.execute(); });
        CommandHistory.add(this.commands);
    };
    Order.prototype.cancelOrder = function () {
        console.log("Canceling order for ".concat(this.dish));
        this.commands.slice().reverse().forEach(function (command) { return command.undo(); });
    };
    return Order;
}());
var CommandHistory = /** @class */ (function () {
    function CommandHistory() {
    }
    CommandHistory.add = function (commands) {
        this.history.push(commands);
    };
    CommandHistory.undo = function () {
        var lastCommands = this.history.pop();
        if (lastCommands) {
            console.log('Undoing last order');
            lastCommands.slice().reverse().forEach(function (command) { return command.undo(); });
        }
        else {
            console.log('No orders to undo');
        }
    };
    CommandHistory.history = [];
    return CommandHistory;
}());
// Exemplu de utilizare
var order1 = new Order('Pizza');
order1.placeOrder(); // Output: Cooking Pizza / Placing order for Pizza
var order2 = new Order('Pasta');
order2.placeOrder(); // Output: Cooking Pasta / Placing order for Pasta
CommandHistory.undo(); // Output: Canceling order for Pasta / Cancel cooking Pasta
