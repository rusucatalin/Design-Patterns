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
var Product = /** @class */ (function () {
    function Product(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
    return Product;
}());
var StandardProduct = /** @class */ (function (_super) {
    __extends(StandardProduct, _super);
    function StandardProduct(name, price, description) {
        return _super.call(this, name, price, description) || this;
    }
    StandardProduct.prototype.calculateDiscountPrice = function () {
        return this.price;
    };
    return StandardProduct;
}(Product));
var SaleProduct = /** @class */ (function (_super) {
    __extends(SaleProduct, _super);
    function SaleProduct(name, price, description, discount) {
        var _this = _super.call(this, name, price, description) || this;
        _this.discount = discount;
        return _this;
    }
    SaleProduct.prototype.calculateDiscountPrice = function () {
        return this.price - this.discount;
    };
    return SaleProduct;
}(Product));
var ProductRepository = /** @class */ (function () {
    function ProductRepository(initialProducts) {
        if (initialProducts === void 0) { initialProducts = []; }
        this.products = [];
        this.products = initialProducts;
    }
    ProductRepository.prototype.getAllProducts = function () {
        return this.products;
    };
    ProductRepository.prototype.getProductByName = function (name) {
        // @ts-ignore
        return this.products.find(function (product) { return product.name === name; });
    };
    return ProductRepository;
}());
var OrderService = /** @class */ (function () {
    function OrderService(productRepository) {
        this.productRepository = productRepository;
    }
    OrderService.prototype.createOrder = function (products, customerEmail) {
        var totalPrice = products.reduce(function (acc, product) { return acc + product.price; }, 0);
        return {
            products: products,
            totalPrice: totalPrice,
            customerEmail: customerEmail,
        };
    };
    return OrderService;
}());
var productRepository = new ProductRepository([
    new StandardProduct("Product food", 10, "Description of food"),
    new SaleProduct("Product drink", 20, "Description of drink", 5),
]);
var orderService = new OrderService(productRepository);
var products = [productRepository.getProductByName("Product food")];
var order = orderService.createOrder(products, "customer@example.com");
var products1 = [productRepository.getProductByName("Product drink")];
var order1 = orderService.createOrder(products1, "costumer1@example.com");
console.log(order, order1);
