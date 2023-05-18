interface Observer {
    update(event: string, data: any): void;
}


class ProductManagementSystem {
    private observers: Observer[] = [];


    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }


    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }


    notifyObservers(event: string, data: any): void {
        for (const observer of this.observers) {
            observer.update(event, data);
        }
    }


    addProduct(product: any): void {



        this.notifyObservers('product_added', product);
    }


    updateProduct(product: any): void {

        this.notifyObservers('product_updated', product);
    }


    deleteProduct(productId: string): void {

        this.notifyObservers('product_deleted', productId);
    }
}

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


const productManagementSystem = new ProductManagementSystem();


const user1 = new UserNotification('John');
const user2 = new UserNotification('Alice');


productManagementSystem.addObserver(user1);
productManagementSystem.addObserver(user2);


const newProduct = { id: '123', name: 'Laptop', price: 2000 };
productManagementSystem.addProduct(newProduct);


const updatedProduct = { id: '456', name: 'Telefon', price: 1500 };
productManagementSystem.updateProduct(updatedProduct);


const deletedProductId = '789';
productManagementSystem.deleteProduct(deletedProductId);


productManagementSystem.removeObserver(user2);


const anotherProduct = { id: '999', name: 'Căști wireless', price: 100 };
productManagementSystem.addProduct(anotherProduct);
