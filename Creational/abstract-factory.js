var AbstractFactory;
(function (AbstractFactory) {
    var EUBMW = /** @class */ (function () {
        function EUBMW() {
        }
        EUBMW.prototype.startEngine = function () {
            console.log("Starting engine = EU BMW");
        };
        return EUBMW;
    }());
    var USBMW = /** @class */ (function () {
        function USBMW() {
        }
        USBMW.prototype.startEngine = function () {
            console.log("Starting engine - US BMW");
        };
        return USBMW;
    }());
    var EUTesla = /** @class */ (function () {
        function EUTesla() {
        }
        EUTesla.prototype.startEngine = function () {
            console.log("Starting engine = EU TESLA");
        };
        return EUTesla;
    }());
    var USTesla = /** @class */ (function () {
        function USTesla() {
        }
        USTesla.prototype.startEngine = function () {
            console.log("Starting engine - US TESLA");
        };
        return USTesla;
    }());
    var USFactory = /** @class */ (function () {
        function USFactory() {
        }
        USFactory.prototype.manufactureBMW = function () {
            return new USBMW();
        };
        USFactory.prototype.manufactureTesla = function () {
            return new USTesla();
        };
        return USFactory;
    }());
    var EUFactory = /** @class */ (function () {
        function EUFactory() {
        }
        EUFactory.prototype.manufactureBMW = function () {
            return new EUBMW();
        };
        EUFactory.prototype.manufactureTesla = function () {
            return new EUTesla();
        };
        return EUFactory;
    }());
    function manufactureCars(carFactory) {
        var bmw = carFactory.manufactureBMW();
        var tesla = carFactory.manufactureTesla();
        bmw.startEngine();
        tesla.startEngine();
    }
    console.log("Building EU Cars:");
    manufactureCars(new EUFactory());
    console.log("Building US Cars:");
    manufactureCars(new USFactory());
})(AbstractFactory || (AbstractFactory = {}));
