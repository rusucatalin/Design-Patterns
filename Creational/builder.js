var Builder;
(function (Builder) {
    var PaymentSdkConfigBuilder = /** @class */ (function () {
        function PaymentSdkConfigBuilder(merchantId, secretKey) {
            this.merchantId = merchantId;
            this.secretKey = secretKey;
        }
        PaymentSdkConfigBuilder.prototype.getMerchantId = function () {
            return this.merchantId;
        };
        PaymentSdkConfigBuilder.prototype.getSecretKey = function () {
            return this.secretKey;
        };
        PaymentSdkConfigBuilder.prototype.setCurrency = function (currency) {
            this.currency = currency;
            return this;
        };
        PaymentSdkConfigBuilder.prototype.getCurrency = function () {
            return this.currency;
        };
        PaymentSdkConfigBuilder.prototype.setMaxRetry = function (count) {
            this.maxRetry = count;
            return this;
        };
        PaymentSdkConfigBuilder.prototype.getMaxRetry = function () {
            return this.maxRetry;
        };
        PaymentSdkConfigBuilder.prototype.build = function () {
            return new PaymentSdkConfig(this);
        };
        return PaymentSdkConfigBuilder;
    }());
    var PaymentSdkConfig = /** @class */ (function () {
        function PaymentSdkConfig(builder) {
            this.merchantId = builder.getMerchantId();
            this.currency = builder.getCurrency();
            this.secretKey = builder.getSecretKey();
            this.maxRetry = builder.getMaxRetry();
        }
        return PaymentSdkConfig;
    }());
    //   const paymentSdkConfigBuilder = new PaymentSdkConfigBuilder("metro", "dsldjsjdlskjdls");
    //   paymentSdkConfigBuilder.setMaxRetry(3);
    //   paymentSdkConfigBuilder.setCurrency("USD");
    //   const paymentSdkConfigBuilder = new PaymentSdkConfigBuilder(
    //     "metro",
    //     "dsldjsjdlskjdls"
    //   )
    //     .setMaxRetry(3)
    //     .setCurrency("USD");
    //   const paymentSdkConfig: PaymentSdkConfig = paymentSdkConfigBuilder.build();
    //   console.log(paymentSdkConfig);
    var paymentSdkConfig = new PaymentSdkConfigBuilder("metro", "fkldjlfkd")
        .setCurrency("MDL")
        .build();
    console.log(paymentSdkConfig);
})(Builder || (Builder = {}));
