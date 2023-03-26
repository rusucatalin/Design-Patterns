interface Car {
  startEngine(): void;
}

class GasCar implements Car {
  startEngine(): void {
    console.log("Starting internal combustion engine");
  }
}

class ElectricCar implements Car {
  startEngine(): void {
    console.log("Starting electrical engine");
  }
}

enum CarType {
  Gas,
  Electrical,
}

interface CarFactory {
  manufactureCar(carType: CarType): Car;
}

class EUCarFactory implements CarFactory {
  public manufactureCar(carType: CarType): Car {
    if (carType === CarType.Gas) {
      return new GasCar();
    } else {
      return new ElectricCar();
    }
  }
}

const carFactory: CarFactory = new EUCarFactory();
const gasCar = carFactory.manufactureCar(CarType.Gas);
gasCar.startEngine();
const electricCar = carFactory.manufactureCar(CarType.Electrical);
electricCar.startEngine();
