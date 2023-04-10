namespace Builder {
  class PaymentSdkConfigBuilder {
    private merchantId: string;
    private secretKey: string;
    private currency: string | null;
    private maxRetry: number | null;

    constructor(merchantId: string, secretKey: string) {
      this.merchantId = merchantId;
      this.secretKey = secretKey;
    }

    getMerchantId(): string {
      return this.merchantId;
    }

    getSecretKey(): string {
      return this.secretKey;
    }

    setCurrency(currency: string): PaymentSdkConfigBuilder {
      this.currency = currency;
      return this;
    }

    getCurrency(): string | null {
      return this.currency;
    }

    setMaxRetry(count: number): PaymentSdkConfigBuilder {
      this.maxRetry = count;
      return this;
    }

    getMaxRetry(): number | null {
      return this.maxRetry;
    }

    build(): PaymentSdkConfig {
      return new PaymentSdkConfig(this);
    }
  }

  class PaymentSdkConfig {
    private merchantId: string;
    private secretKey: string;
    private currency: string | null;
    private maxRetry: number | null;

    constructor(builder: PaymentSdkConfigBuilder) {
      this.merchantId = builder.getMerchantId();
      this.currency = builder.getCurrency();
      this.secretKey = builder.getSecretKey();
      this.maxRetry = builder.getMaxRetry();
    }
  }

  //   const paymentSdkConfigBuilder = new PaymentSdkConfigBuilder("metro", "dsldjsjdlskjdls");
  //   paymentSdkConfigBuilder.setMaxRetry(3);
  //   paymentSdkConfigBuilder.setCurrency("USD");

  const paymentSdkConfigBuilder = new PaymentSdkConfigBuilder(
    "metro",
    "dsldjsjdlskjdls"
  )
    .setMaxRetry(3)
    .setCurrency("USD");

  const paymentSdkConfig: PaymentSdkConfig = paymentSdkConfigBuilder.build();
  console.log(paymentSdkConfig);

  //   const paymentSdkConfig: PaymentSdkConfig = new PaymentSdkConfigBuilder(
  //     "metro",
  //     "fkldjlfkd"
  //   )
  //     .setCurrency("MDL")
  //     .build();

  //   console.log(paymentSdkConfig);
}
