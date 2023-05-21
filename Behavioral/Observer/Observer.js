var ProductManagementSystem = /** @class */ (function () {
    function ProductManagementSystem() {
        this.observers = [];
    }
    ProductManagementSystem.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    ProductManagementSystem.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    ProductManagementSystem.prototype.notifyObservers = function (event, data) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(event, data);
        }
    };
    ProductManagementSystem.prototype.addProduct = function (product) {
        this.notifyObservers('product_added', product);
    };
    ProductManagementSystem.prototype.updateProduct = function (product) {
        this.notifyObservers('product_updated', product);
    };
    ProductManagementSystem.prototype.deleteProduct = function (productId) {
        this.notifyObservers('product_deleted', productId);
    };
    return ProductManagementSystem;
}());
var UserNotification = /** @class */ (function () {
    function UserNotification(username) {
        this.username = username;
    }
    UserNotification.prototype.update = function (event, data) {
        switch (event) {
            case 'product_added':
                console.log("User ".concat(this.username, " Notification: new product was added."));
                console.log('Product details:', data);
                break;
            case 'product_updated':
                console.log("User ".concat(this.username, " Notification: An product was updated."));
                console.log('Product details update:', data);
                break;
            case 'product_deleted':
                console.log("User ".concat(this.username, " Notification: An product was deleted."));
                console.log('ID product was deleted:', data);
                break;
            default:
                console.log("User ".concat(this.username, " Notification: unknown"));
                break;
        }
    };
    return UserNotification;
}());
var productManagementSystem = new ProductManagementSystem();
var user1 = new UserNotification('John');
var user2 = new UserNotification('Alice');
productManagementSystem.addObserver(user1);
productManagementSystem.addObserver(user2);
var newProduct = { id: '123', name: 'Laptop', price: 2000 };
productManagementSystem.addProduct(newProduct);
var updatedProduct = { id: '456', name: 'Smartphone', price: 1500 };
productManagementSystem.updateProduct(updatedProduct);
var deletedProductId = '789';
productManagementSystem.deleteProduct(deletedProductId);
productManagementSystem.removeObserver(user2);
var anotherProduct = { id: '999', name: 'Wireless earphone', price: 100 };
productManagementSystem.addProduct(anotherProduct);
