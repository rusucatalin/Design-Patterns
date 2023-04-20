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
var ExistingPaymentService = /** @class */ (function () {
    function ExistingPaymentService() {
    }
    ExistingPaymentService.prototype.processPayment = function (amount, cardNumber, cvv, transactionId) {
        return true;
    };
    return ExistingPaymentService;
}());
var ThirdPartyPaymentAdapter = /** @class */ (function (_super) {
    __extends(ThirdPartyPaymentAdapter, _super);
    function ThirdPartyPaymentAdapter(thirdPartyPaymentService) {
        var _this = _super.call(this) || this;
        _this.thirdPartyPaymentService = thirdPartyPaymentService;
        return _this;
    }
    ThirdPartyPaymentAdapter.prototype.processPayment = function (amount, cardNumber, cvv, transactionId) {
        var authorized = this.thirdPartyPaymentService.authorizePayment(amount, cardNumber, cvv);
        if (authorized) {
            var captured = this.thirdPartyPaymentService.capturePayment(amount, transactionId);
            if (captured) {
                return true;
            }
        }
        return false;
    };
    return ThirdPartyPaymentAdapter;
}(ExistingPaymentService));
var thirdPartyPaymentService = {
    authorizePayment: function (amount, cardNumber, cvv) {
        return true;
    },
    capturePayment: function (amount, transactionId) {
        return true;
    }
};
var adapter = new ThirdPartyPaymentAdapter(thirdPartyPaymentService);
var paymentResult = adapter.processPayment(100, "1234 5678 9012 3456", "123", "123456789");
console.log("Payment was " + (paymentResult ? "approved" : "rejected"));
