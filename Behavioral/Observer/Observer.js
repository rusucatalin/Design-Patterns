// Definim clasa subiect (Subject) care va notifica observatorii
var ProductManagementSystem = /** @class */ (function () {
    function ProductManagementSystem() {
        this.observers = [];
    }
    // Metoda pentru adăugarea unui observator
    ProductManagementSystem.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    // Metoda pentru ștergerea unui observator
    ProductManagementSystem.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    // Metoda pentru notificarea observatorilor
    ProductManagementSystem.prototype.notifyObservers = function (event, data) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(event, data);
        }
    };
    // Metoda pentru adăugarea unui produs
    ProductManagementSystem.prototype.addProduct = function (product) {
        // Logica de adăugare a produsului
        // Notificăm observatorii că s-a adăugat un produs nou
        this.notifyObservers('product_added', product);
    };
    // Metoda pentru actualizarea unui produs
    ProductManagementSystem.prototype.updateProduct = function (product) {
        // Logica de actualizare a produsului
        // Notificăm observatorii că s-a actualizat un produs
        this.notifyObservers('product_updated', product);
    };
    // Metoda pentru ștergerea unui produs
    ProductManagementSystem.prototype.deleteProduct = function (productId) {
        // Logica de ștergere a produsului
        // Notificăm observatorii că s-a șters un produs
        this.notifyObservers('product_deleted', productId);
    };
    return ProductManagementSystem;
}());
// Implementăm clasa de observator (Observer)
var UserNotification = /** @class */ (function () {
    function UserNotification(username) {
        this.username = username;
    }
    UserNotification.prototype.update = function (event, data) {
        switch (event) {
            case 'product_added':
                console.log("Utilizatorul ".concat(this.username, " a primit o notificare: A fost ad\u0103ugat un produs nou."));
                console.log('Detalii produs:', data);
                break;
            case 'product_updated':
                console.log("Utilizatorul ".concat(this.username, " a primit o notificare: A fost actualizat un produs."));
                console.log('Detalii produs actualizat:', data);
                break;
            case 'product_deleted':
                console.log("Utilizatorul ".concat(this.username, " a primit o notificare: A fost \u0219ters un produs."));
                console.log('ID produs șters:', data);
                break;
            default:
                console.log("Utilizatorul ".concat(this.username, " a primit o notificare cu eveniment necunoscut."));
                break;
        }
    };
    return UserNotification;
}());
// Exemplu de utilizare
var productManagementSystem = new ProductManagementSystem();
// Creăm observatori
var user1 = new UserNotification('John');
var user2 = new UserNotification('Alice');
// Adăugăm observatorii în sistemul de gestiune a produselor
productManagementSystem.addObserver(user1);
productManagementSystem.addObserver(user2);
// Adăugăm un produs nou
var newProduct = { id: '123', name: 'Laptop', price: 2000 };
productManagementSystem.addProduct(newProduct);
// Actualizăm un produs existent
var updatedProduct = { id: '456', name: 'Telefon', price: 1500 };
productManagementSystem.updateProduct(updatedProduct);
// Ștergem un produs
var deletedProductId = '789';
productManagementSystem.deleteProduct(deletedProductId);
// Eliminăm un observator din sistem
productManagementSystem.removeObserver(user2);
// Adăugăm un alt produs nou
var anotherProduct = { id: '999', name: 'Căști wireless', price: 100 };
productManagementSystem.addProduct(anotherProduct);
