namespace AbstractFactory {
  interface AbstractCar {
    startEngine(): void;
  }

  class EUBMW implements AbstractCar {
    startEngine(): void {
      console.log("Starting engine = EU BMW");
    }
  }

  class USBMW implements AbstractCar {
    startEngine(): void {
      console.log("Starting engine - US BMW");
    }
  }

  class EUTesla implements AbstractCar {
    startEngine(): void {
      console.log("Starting engine = EU TESLA");
    }
  }

  class USTesla implements AbstractCar {
    startEngine(): void {
      console.log("Starting engine - US TESLA");
    }
  }

  interface AbstractCarFactory {
    manufactureBMW(): AbstractCar;
    manufactureTesla(): AbstractCar;
  }

  class USFactory implements AbstractCarFactory {
    manufactureBMW(): AbstractCar {
      return new USBMW();
    }

    manufactureTesla(): AbstractCar {
      return new USTesla();
    }
  }

  class EUFactory implements AbstractCarFactory {
    manufactureBMW(): AbstractCar {
      return new EUBMW();
    }

    manufactureTesla(): AbstractCar {
      return new EUTesla();
    }
  }

  function manufactureCars(carFactory: AbstractCarFactory) {
    const bmw = carFactory.manufactureBMW();
    const tesla = carFactory.manufactureTesla();

    bmw.startEngine();
    tesla.startEngine();
  }

  console.log("Building EU Cars:");
  manufactureCars(new EUFactory());
  console.log("Building US Cars:");
  manufactureCars(new USFactory());
}
