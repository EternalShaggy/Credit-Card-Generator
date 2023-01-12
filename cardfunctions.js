function generateCardDetails() {
    // Credit card number
    const cardNumber = Math.floor(100000000000000 + Math.random() * 900000000000000);
    
    // CVC code
    const cvc = Math.floor(100 + Math.random() * 900);
  
    // Expiration date
    const month = Math.floor(1 + Math.random() * 12);
    const year = Math.floor(2022 + Math.random() * 10);
  
    return [cardNumber, cvc, `${month}/${year}`];
  }