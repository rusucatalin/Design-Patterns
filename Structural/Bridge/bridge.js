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
var Button = /** @class */ (function () {
    function Button(label) {
        this.label = label;
    }
    return Button;
}());
var SubmitButton = /** @class */ (function (_super) {
    __extends(SubmitButton, _super);
    function SubmitButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubmitButton.prototype.render = function () {
        console.log("<button type=\"submit\">".concat(this.label, "</button>"));
    };
    return SubmitButton;
}(Button));
var CancelButton = /** @class */ (function (_super) {
    __extends(CancelButton, _super);
    function CancelButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CancelButton.prototype.render = function () {
        console.log("<button type=\"button\">".concat(this.label, "</button>"));
    };
    return CancelButton;
}(Button));
var TradeOrder = /** @class */ (function () {
    function TradeOrder(symbol, quantity) {
        this.symbol = symbol;
        this.quantity = quantity;
    }
    return TradeOrder;
}());
var BuyOrder = /** @class */ (function (_super) {
    __extends(BuyOrder, _super);
    function BuyOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BuyOrder.prototype.execute = function () {
        console.log("Buying ".concat(this.quantity, " shares of ").concat(this.symbol));
    };
    return BuyOrder;
}(TradeOrder));
var SellOrder = /** @class */ (function (_super) {
    __extends(SellOrder, _super);
    function SellOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SellOrder.prototype.execute = function () {
        console.log("Selling ".concat(this.quantity, " shares of ").concat(this.symbol));
    };
    return SellOrder;
}(TradeOrder));
var TradeForm = /** @class */ (function () {
    function TradeForm(uiElement, transactionElement) {
        this.uiElement = uiElement;
        this.transactionElement = transactionElement;
    }
    TradeForm.prototype.render = function () {
        this.uiElement.render();
    };
    TradeForm.prototype.executeTrade = function () {
        this.transactionElement.execute();
    };
    return TradeForm;
}());
var tradeForm = new TradeForm(new SubmitButton("Buy"), new BuyOrder("AAPL", 10));
tradeForm.render();
tradeForm.executeTrade();
