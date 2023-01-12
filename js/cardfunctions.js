//The following functions generatoes an array containing a random credit card number, a random cvc code, and a random date. 
function generateCardDetails() {
    // Credit card number
    const cardNumber = Math.floor(100000000000000 + Math.random() * 900000000000000);
    
    // CVC code
    const cvc = Math.floor(100 + Math.random() * 900);
  
    // Expiration date
    const month = Math.floor(1 + Math.random() * 12);
    const year = Math.floor(2022 + Math.random() * 10);
  
    displayCardInformation(cardNumber, cvc, `${month}/${year}`);
  }

//The following function copys the contents of the element card number to the devices clipboard
  function copyToClipboard() {
    const cardNumber = document.getElementById("card_number").innerText;
    navigator.clipboard.writeText(cardNumber);
    alert("Card number copied to clipboard!");
  }

  function displayCardInformation(cardNumber, cvcNumber, expirationDate){
    navigator
  }