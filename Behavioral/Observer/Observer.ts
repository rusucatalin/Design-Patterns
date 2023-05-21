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
                console.log(`User ${this.username} Notification: new product was added.`);
                console.log('Product details:', data);
                break;
            case 'product_updated':
                console.log(`User ${this.username} Notification: An product was updated.`);
                console.log('Product details update:', data);
                break;
            case 'product_deleted':
                console.log(`User ${this.username} Notification: An product was deleted.`);
                console.log('ID product was deleted:', data);
                break;
            default:
                console.log(`User ${this.username} Notification: unknown`);
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


const updatedProduct = { id: '456', name: 'Smartphone', price: 1500 };
productManagementSystem.updateProduct(updatedProduct);


const deletedProductId = '789';
productManagementSystem.deleteProduct(deletedProductId);


productManagementSystem.removeObserver(user2);


const anotherProduct = { id: '999', name: 'Wireless earphone', price: 100 };
productManagementSystem.addProduct(anotherProduct);
