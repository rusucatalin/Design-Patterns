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
// Clasa abstractă pentru colegi (componente)
var Colleague = /** @class */ (function () {
    function Colleague(mediator) {
        this.mediator = mediator;
    }
    return Colleague;
}());
// Implementarea mediatorului
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator() {
        this.colleagues = [];
    }
    ConcreteMediator.prototype.register = function (colleague) {
        this.colleagues.push(colleague);
    };
    ConcreteMediator.prototype.sendMessage = function (message, sender) {
        this.colleagues.forEach(function (colleague) {
            if (colleague !== sender) {
                colleague.receiveMessage(message);
            }
        });
    };
    return ConcreteMediator;
}());
// Implementarea unui coleg concret
var ConcreteColleague = /** @class */ (function (_super) {
    __extends(ConcreteColleague, _super);
    function ConcreteColleague(mediator) {
        return _super.call(this, mediator) || this;
    }
    ConcreteColleague.prototype.receiveMessage = function (message) {
        console.log("Mesaj primit: ".concat(message));
    };
    ConcreteColleague.prototype.send = function (message) {
        console.log("Trimitere mesaj: ".concat(message));
        this.mediator.sendMessage(message, this);
    };
    return ConcreteColleague;
}(Colleague));
// Utilizarea sablonului Mediator
var mediator = new ConcreteMediator();
var colleague1 = new ConcreteColleague(mediator);
var colleague2 = new ConcreteColleague(mediator);
mediator.register(colleague1);
mediator.register(colleague2);
colleague1.send("Salut coleg!");
colleague2.send("Bună! Cum merge?");
