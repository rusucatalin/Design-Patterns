interface ThirdPartyPaymentService {
    authorizePayment(amount: number, cardNumber: string, cvv: string): boolean;

    capturePayment(amount: number, transactionId: string): boolean;
}


class ExistingPaymentService {
    processPayment(amount: number, cardNumber: string, cvv: string, transactionId: string): boolean {
        return true;
    }
}


class ThirdPartyPaymentAdapter extends ExistingPaymentService {
    private thirdPartyPaymentService: ThirdPartyPaymentService;

    constructor(thirdPartyPaymentService: ThirdPartyPaymentService) {
        super();
        this.thirdPartyPaymentService = thirdPartyPaymentService;
    }

    processPayment(amount: number, cardNumber: string, cvv: string, transactionId: string): boolean {
        const authorized = this.thirdPartyPaymentService.authorizePayment(amount, cardNumber, cvv);
        if (authorized) {
            const captured = this.thirdPartyPaymentService.capturePayment(amount, transactionId);
            if (captured) {
                return true;
            }
        }
        return false;
    }
}


const thirdPartyPaymentService: ThirdPartyPaymentService = {
    authorizePayment(amount: number, cardNumber: string, cvv: string): boolean {

        return true;
    },
    capturePayment(amount: number, transactionId: string): boolean {

        return true;
    }
};
const adapter: ExistingPaymentService = new ThirdPartyPaymentAdapter(thirdPartyPaymentService);


const paymentResult = adapter.processPayment(100, "1234 5678 9012 3456", "123", "123456789");
console.log("Payment was " + (paymentResult ? "approved" : "rejected"));


