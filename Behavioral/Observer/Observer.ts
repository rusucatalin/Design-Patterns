// Definim interfata pentru observatori
interface Observer {
    update(event: string, data: any): void;
}

// Definim clasa subiect (Subject) care va notifica observatorii
class ProductManagementSystem {
    private observers: Observer[] = [];

    // Metoda pentru adăugarea unui observator
    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    // Metoda pentru ștergerea unui observator
    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // Metoda pentru notificarea observatorilor
    notifyObservers(event: string, data: any): void {
        for (const observer of this.observers) {
            observer.update(event, data);
        }
    }

    // Metoda pentru adăugarea unui produs
    addProduct(product: any): void {
        // Logica de adăugare a produsului

        // Notificăm observatorii că s-a adăugat un produs nou
        this.notifyObservers('product_added', product);
    }

    // Metoda pentru actualizarea unui produs
    updateProduct(product: any): void {
        // Logica de actualizare a produsului

        // Notificăm observatorii că s-a actualizat un produs
        this.notifyObservers('product_updated', product);
    }

    // Metoda pentru ștergerea unui produs
    deleteProduct(productId: string): void {
        // Logica de ștergere a produsului

        // Notificăm observatorii că s-a șters un produs
        this.notifyObservers('product_deleted', productId);
    }
}

// Implementăm clasa de observator (Observer)
class UserNotification implements Observer {
    private username: string;

    constructor(username: string) {
        this.username = username;
    }

    update(event: string, data: any): void {
        switch (event) {
            case 'product_added':
                console.log(`Utilizatorul ${this.username} a primit o notificare: A fost adăugat un produs nou.`);
                console.log('Detalii produs:', data);
                break;
            case 'product_updated':
                console.log(`Utilizatorul ${this.username} a primit o notificare: A fost actualizat un produs.`);
                console.log('Detalii produs actualizat:', data);
                break;
            case 'product_deleted':
                console.log(`Utilizatorul ${this.username} a primit o notificare: A fost șters un produs.`);
                console.log('ID produs șters:', data);
                break;
            default:
                console.log(`Utilizatorul ${this.username} a primit o notificare cu eveniment necunoscut.`);
                break;
        }
    }
}

// Exemplu de utilizare
const productManagementSystem = new ProductManagementSystem();

// Creăm observatori
const user1 = new UserNotification('John');
const user2 = new UserNotification('Alice');

// Adăugăm observatorii în sistemul de gestiune a produselor
productManagementSystem.addObserver(user1);
productManagementSystem.addObserver(user2);

// Adăugăm un produs nou
const newProduct = { id: '123', name: 'Laptop', price: 2000 };
productManagementSystem.addProduct(newProduct);

// Actualizăm un produs existent
const updatedProduct = { id: '456', name: 'Telefon', price: 1500 };
productManagementSystem.updateProduct(updatedProduct);


const deletedProductId = '789';
productManagementSystem.deleteProduct(deletedProductId);


productManagementSystem.removeObserver(user2);


const anotherProduct = { id: '999', name: 'Căști wireless', price: 100 };
productManagementSystem.addProduct(anotherProduct);
