let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-control");
let elList = document.querySelector(".list");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

let elInputValue = (elInput.value);

  for (foodElement of elInputValue) {
    foodElement = []

    let elItem = document.createElement("li");
      if (elInputValue <= 0) {
      alert("son kiritmang")
      elList.appendChild();
      console.log();
      } 

      else if (elInputValue >= 0)  {
        alert("son kiritmang")
        elList.appendChild();
        console.log();
  
      }
    foodElement.push(elInputValue);
    elInput.value = "";
    elList.appendChild(elItem);
    console.log(`Maxsulot: = ${foodElement}`);
    elItem.textContent = `Maxsulot nomi = ${foodElement}`;
     return (foodElement);

  };
});


