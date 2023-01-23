

//The following function copys the contents of the element card number to the devices clipboard
  function copyToClipboard() {
    const cardNumber = document.getElementById("card_number").innerText;
    navigator.clipboard.writeText(cardNumber);
    alert("Card number copied to clipboard!");
  }

  

  //The following functions generatoes an array containing a random credit card number, a random cvc code, and a random date. 
  function generateCardDetails() {
    // Credit card number
    let cardNumber = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
    
    // CVC code
    const cvc = Math.floor(100 + Math.random() * 900);
  
    // Expiration date
    const month = Math.floor(1 + Math.random() * 12);
    const year = Math.floor(2022 + Math.random() * 10);
    // Add space every fourth digit
    cardNumber = cardNumber.toString().replace(/(\d{4})/g, '$1 ');
    displayCardInformation(cardNumber, cvc, `${month}/${year}`);
}


function displayCardInformation(cardNumber, cvcNumber, expirationDate){
  document.getElementById("card_number").innerText = cardNumber;
  document.getElementById("cvc_number").innerText = cvcNumber;
  document.getElementById("expiration_date").innerText = expirationDate;
}
