let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-control");
let elList = document.querySelector(".list");



elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

 elInputValue = (elInput.value);

  for (foodElement of elInputValue) {

    foodElement = []

    let elItem = document.createElement("li");
    
    foodElement.push(elInputValue);
    elInput.value = ""
    elList.appendChild(elItem);
    console.log(`Maxsulot: = ${foodElement}`);
    elItem.textContent = foodElement;
     return (foodElement);
     if (foodElement > 0) {
      elItem.textContent = "son kiritmang"
     }

  
     
  };


      

});

