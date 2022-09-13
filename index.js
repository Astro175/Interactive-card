// Declaring variables
var inputName = document.getElementById("input-name")
    inputNumber = document.querySelector(".input-card-number"),
    inputMonth = document.querySelector(".input-mm"),
    inputYear = document.querySelector(".input-yy"),
    inputCvc = document.querySelector(".input-cvc"),
    cardNumber = document.querySelector(".paragraph-header"),
    cardName = document.querySelector(".paragraph-footer"),
    submitBtn = document.querySelector("#submit-btn"),
    errorName = document.querySelector(".error-name"),
    errorNumber = document.querySelector(".error-number"),
    errorCvc = document.querySelector(".cvc-error"),
    errorMonth = document.querySelector(".month-error"),
    errorYear = document.querySelector(".year-error"),
    monthExp = document.querySelector(".month-exp"),
    YearExp = document.querySelector(".year-exp"),
    cardCvc = document.querySelector(".text-cvc"),
    completeState = document.querySelector(".complete-state"),
    form = document.querySelector("form"),
    continueBtn = document.querySelector(".done-btn")


   //  Validating Card Name

   inputName.addEventListener("keyup", function(e) {
      let cardNamevalue = inputName.value;
      let key = e.key;
      let keyletters = key.match(/^[A-za-z]*$/);
      if (cardNamevalue.length === 0) {
         errorName.innerHTML = "Please enter your name!";
      } else if (keyletters) {
         cardName.innerHTML = cardNamevalue;
      } else {
         cardName.setAttribute("disabled", " ");
         errorName.innerHTML = "Please use only letters";
      }
   })

   // Validating Card Number 
   inputNumber.addEventListener("keyup", function(e) {
      let cardNumbervalue = inputNumber.value;
      let key = e.key;
      let keyletters = key.match(/^[0-9]*$/);
      if (cardNumbervalue.length === 0) {
         errorNumber.innerHTML = "Please enter your number!";
      } else if (keyletters) {
         cardNumber.innerHTML = cardNumbervalue;
      }
       else {
         cardNumber.setAttribute("disabled", " ");
         errorNumber.innerHTML = "Please use only numbers";
      }
   })

   // Splitting the card into four numbers
   inputNumber.addEventListener("input", function(e) {
      e.target.value =  e.target.value =  e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.(4))/g, "$1 ")
      .trim();
   })

   // Card-expiry 
   inputMonth.addEventListener("input", function(e) {
      let value = e.target.value;
      let valueNumbers = value.match(/^[0-9]*$/);
        if ( value=== 0) {
         errorMonth.innerHTML = "Please enter your month!"
        } else if (valueNumbers) {
          monthExp.innerHTML = value;
        } else {
         errorMonth.innerHTML= "Please use only numbers!"
         monthExp.setAttribute("disabled", "")
        } })

   inputYear.addEventListener("input", function(e) {
      let value = e.target.value;
      let valueNumbers = value.match(/^[0-9]*$/);
        if ( value=== 0) {
         errorYear.innerHTML = "Please enter your month!"
        } else if (valueNumbers) {
          YearExp.innerHTML = value;
        } else {
         errorYear.innerHTML= "Please use only numbers!"
         YearExp.setAttribute("disabled", "")
        } })

   // Validating CVC Number 
   inputCvc.addEventListener("input", function(e) {
      let value = e.target.value;
      let valueNumbers = value.match(/^[0-9]*$/);
        if ( value=== 0) {
         errorCvc.innerHTML = "Please enter your month!"
        } else if (valueNumbers) {
          cardCvc.innerHTML = value;
        } else {
         errorCvc.innerHTML= "Please use only numbers!"
         cardCvc.setAttribute("disabled", "")
        } })
 

      // Finally  Validating submit button !

      submitBtn.addEventListener("click", function(){
         if(inputName.value.length <= 0){
            errorName.innerHTML = "Please enter your name!"
         } else if (inputNumber.value.length <= 0) {
            errorNumber.innerHTML = "Please enter your number!"
         } else if(inputMonth.value.length <= 0){
            errorMonth.innerHTML = "Please enter your month!"
         } else if(inputYear.value.length <= 0) {
            errorYear.innerHTML = "Please enter your year!"
         } else if(inputCvc.value.length <= 0) {
            errorCvc.innerHTML = "Please enter your cvc!"
         } else {
            completeState.style.display = "flex";
            form.style.display = "none";
         }
      })

      continueBtn.addEventListener("click", function(){
         completeState.style.display = "none";
         form.style.display = "flex";
      })

