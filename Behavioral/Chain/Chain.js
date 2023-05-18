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
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
        this.nextHandler = null;
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
    };
    AbstractHandler.prototype.handleRequest = function (request) {
        if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    };
    return AbstractHandler;
}());
var ConcreteHandlerA = /** @class */ (function (_super) {
    __extends(ConcreteHandlerA, _super);
    function ConcreteHandlerA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteHandlerA.prototype.handleRequest = function (request) {
        if (request === 'A') {
            console.log("ConcreteHandlerA: Am gestionat cererea.");
        }
        else {
            _super.prototype.handleRequest.call(this, request);
        }
    };
    return ConcreteHandlerA;
}(AbstractHandler));
var ConcreteHandlerB = /** @class */ (function (_super) {
    __extends(ConcreteHandlerB, _super);
    function ConcreteHandlerB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteHandlerB.prototype.handleRequest = function (request) {
        if (request === 'B') {
            console.log("ConcreteHandlerB: Am gestionat cererea.");
        }
        else {
            _super.prototype.handleRequest.call(this, request);
        }
    };
    return ConcreteHandlerB;
}(AbstractHandler));
var ConcreteHandlerC = /** @class */ (function (_super) {
    __extends(ConcreteHandlerC, _super);
    function ConcreteHandlerC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteHandlerC.prototype.handleRequest = function (request) {
        if (request === 'C') {
            console.log("ConcreteHandlerC: Am gestionat cererea.");
        }
        else {
            _super.prototype.handleRequest.call(this, request);
        }
    };
    return ConcreteHandlerC;
}(AbstractHandler));
// Pasul 3: Utilizarea sistemului de gestionare a cererilor
var handlerA = new ConcreteHandlerA();
var handlerB = new ConcreteHandlerB();
var handlerC = new ConcreteHandlerC();
handlerA.setNext(handlerB);
handlerB.setNext(handlerC);
// Creați și trimiteți o cerere către handlerA
var requestA = 'A';
handlerA.handleRequest(requestA);
// Creați și trimiteți o cerere către handlerB
var requestB = 'B';
handlerA.handleRequest(requestB);
// Creați și trimiteți o cerere către handlerC
var requestC = 'C';
handlerA.handleRequest(requestC);
