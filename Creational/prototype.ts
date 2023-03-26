namespace Prototype {
  interface CarPrototype {
    clone(): CarPrototype;
  }

  class BMW implements CarPrototype {
    clone(): CarPrototype {
      return new BMW();
    }
  }

  class Audi implements CarPrototype {
    clone(): CarPrototype {
      return new Audi();
    }
  }

  interface CarFactory {
    manufactureCar(brand: string): CarPrototype;
  }

  class EUCarFactory implements CarFactory {
    private brands: { [brand: string]: CarPrototype } = {};

    constructor() {
      this.brands["BMW"] = new BMW();
      this.brands["AUDI"] = new Audi();
    }

    manufactureCar(brand: string): CarPrototype {
      return this.brands[brand].clone();
    }
  }

  const carFactory: CarFactory = new EUCarFactory();
  const prototypes = ["AUDI", "BMW"].map((brand) =>
    carFactory.manufactureCar(brand)
  );
  console.log(prototypes);
}
