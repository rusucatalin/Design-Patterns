class User {
    constructor(public name: string, public email: string, public password: string) {
    }

    getDetails(): string {
        return `${this.name} (${this.email})`;
    }
}


class UserDecorator {
    constructor(public user: User) {
    }

    getDetails(): string {
        return this.user.getDetails();
    }
}

// Clasa decorator AdminUserDecorator
class AdminUserDecorator extends UserDecorator {
    deleteUser(userId: string): void {
        // Logica pentru ștergerea unui utilizator
    }

    addUser(userData: any): void {
        // Logica pentru adăugarea unui nou utilizator
    }

    getDetails(): string {
        return `${super.getDetails()} [ADMIN]`;
    }
}


class PremiumUserDecorator extends UserDecorator {
    accessExclusiveContent(): void {

    }

    advancedSearch(): void {

    }

    getDetails(): string {
        return `${super.getDetails()} [PREMIUM]`;
    }
}

// Utilizarea decorator-ului AdminUserDecorator pentru un utilizator
const user1 = new User("John Doe", "johndoe@example.com", "password123");
const adminUser1 = new AdminUserDecorator(user1);

console.log(adminUser1.getDetails()); // John Doe (johndoe@example.com) [ADMIN]

// Utilizarea decorator-ului PremiumUserDecorator pentru un utilizator
const user2 = new User("Jane Smith", "janesmith@example.com", "password456");
const premiumUser1 = new PremiumUserDecorator(user2);

console.log(premiumUser1.getDetails()); // Jane Smith (janesmith@example.com) [PREMIUM]
