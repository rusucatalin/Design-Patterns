var GasCar = /** @class */ (function () {
    function GasCar() {
    }
    GasCar.prototype.startEngine = function () {
        console.log("Starting internal combustion engine");
    };
    return GasCar;
}());
var ElectricCar = /** @class */ (function () {
    function ElectricCar() {
    }
    ElectricCar.prototype.startEngine = function () {
        console.log("Starting electrical engine");
    };
    return ElectricCar;
}());
var CarType;
(function (CarType) {
    CarType[CarType["Gas"] = 0] = "Gas";
    CarType[CarType["Electrical"] = 1] = "Electrical";
})(CarType || (CarType = {}));
var EUCarFactory = /** @class */ (function () {
    function EUCarFactory() {
    }
    EUCarFactory.prototype.manufactureCar = function (carType) {
        if (carType === CarType.Gas) {
            return new GasCar();
        }
        else {
            return new ElectricCar();
        }
    };
    return EUCarFactory;
}());
var carFactory = new EUCarFactory();
var gasCar = carFactory.manufactureCar(CarType.Gas);
gasCar.startEngine();
var electricCar = carFactory.manufactureCar(CarType.Electrical);
electricCar.startEngine();
