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
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.getDetails = function () {
        return "".concat(this.name, " (").concat(this.email, ")");
    };
    return User;
}());
var UserDecorator = /** @class */ (function () {
    function UserDecorator(user) {
        this.user = user;
    }
    UserDecorator.prototype.getDetails = function () {
        return this.user.getDetails();
    };
    return UserDecorator;
}());
// Clasa decorator AdminUserDecorator
var AdminUserDecorator = /** @class */ (function (_super) {
    __extends(AdminUserDecorator, _super);
    function AdminUserDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminUserDecorator.prototype.deleteUser = function (userId) {
        // Logica pentru ștergerea unui utilizator
    };
    AdminUserDecorator.prototype.addUser = function (userData) {
        // Logica pentru adăugarea unui nou utilizator
    };
    AdminUserDecorator.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), " [ADMIN]");
    };
    return AdminUserDecorator;
}(UserDecorator));
var PremiumUserDecorator = /** @class */ (function (_super) {
    __extends(PremiumUserDecorator, _super);
    function PremiumUserDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PremiumUserDecorator.prototype.accessExclusiveContent = function () {
    };
    PremiumUserDecorator.prototype.advancedSearch = function () {
    };
    PremiumUserDecorator.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), " [PREMIUM]");
    };
    return PremiumUserDecorator;
}(UserDecorator));
// Utilizarea decorator-ului AdminUserDecorator pentru un utilizator
var user1 = new User("John Doe", "johndoe@example.com", "password123");
var adminUser1 = new AdminUserDecorator(user1);
console.log(adminUser1.getDetails()); // John Doe (johndoe@example.com) [ADMIN]
// Utilizarea decorator-ului PremiumUserDecorator pentru un utilizator
var user2 = new User("Jane Smith", "janesmith@example.com", "password456");
var premiumUser1 = new PremiumUserDecorator(user2);
console.log(premiumUser1.getDetails()); // Jane Smith (janesmith@example.com) [PREMIUM]
