interface IProduct {
    name: string;
    price: number;
    description: string;
}

interface IOrder {
    products: IProduct[];
    totalPrice: number;
    customerEmail: string;
}

abstract class Product {
    constructor(
        public readonly name: string,
        public readonly price: number,
        public readonly description: string
    ) {}

    abstract calculateDiscountPrice(): number;
}

class StandardProduct extends Product {
    constructor(name: string, price: number, description: string) {
        super(name, price, description);
    }

    calculateDiscountPrice(): number {
        return this.price;
    }
}

class SaleProduct extends Product {
    constructor(
        name: string,
        price: number,
        description: string,
        public readonly discount: number
    ) {
        super(name, price, description);
    }

    calculateDiscountPrice(): number {
        return this.price - this.discount;
    }
}

interface IProductRepository {
    getAllProducts(): IProduct[];
    getProductByName(name: string): IProduct | undefined;
}

class ProductRepository implements IProductRepository {
    private readonly products: IProduct[] = [];

    constructor(initialProducts: IProduct[] = []) {
        this.products = initialProducts;
    }

    getAllProducts(): IProduct[] {
        return this.products;
    }

    getProductByName(name: string): IProduct | undefined {
        // @ts-ignore
        return this.products.find((product) => product.name === name);
    }
}

interface IOrderService {
    createOrder(products: IProduct[], customerEmail: string): IOrder;
}

class OrderService implements IOrderService {
    constructor(private readonly productRepository: IProductRepository) {}

    createOrder(products: IProduct[], customerEmail: string): IOrder {
        const totalPrice = products.reduce(
            (acc, product) => acc + product.price,
            0
        );

        return {
            products,
            totalPrice,
            customerEmail,
        };
    }
}

const productRepository = new ProductRepository([
    new StandardProduct("Product 1", 10, "Description 1"),
    new SaleProduct("Product 2", 20, "Description 2", 5),
]);

const orderService = new OrderService(productRepository);

const products = [productRepository.getProductByName("Product 1")!];

const order = orderService.createOrder(products, "customer@example.com");

console.log(order);
