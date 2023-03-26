var Prototype;
(function (Prototype) {
    var BMW = /** @class */ (function () {
        function BMW() {
        }
        BMW.prototype.clone = function () {
            return new BMW();
        };
        return BMW;
    }());
    var Audi = /** @class */ (function () {
        function Audi() {
        }
        Audi.prototype.clone = function () {
            return new Audi();
        };
        return Audi;
    }());
    var EUCarFactory = /** @class */ (function () {
        function EUCarFactory() {
            this.brands = {};
            this.brands["BMW"] = new BMW();
            this.brands["AUDI"] = new Audi();
        }
        EUCarFactory.prototype.manufactureCar = function (brand) {
            return this.brands[brand].clone();
        };
        return EUCarFactory;
    }());
    var carFactory = new EUCarFactory();
    var prototypes = ["AUDI", "BMW"].map(function (brand) {
        return carFactory.manufactureCar(brand);
    });
    console.log(prototypes);
})(Prototype || (Prototype = {}));
