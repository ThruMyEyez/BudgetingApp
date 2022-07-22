 /*  What values to target? */
 // total balance
const balanceElement = document.querySelector("#balance");
//value input
const valueInputElement = document.querySelector("input");
// income / expense
const selectElement = document.querySelector("select");
// addition button
const additionButtonElement = document.querySelector("footer button");
//entry list 
const entryListElement = document.querySelector("section ul");

/*
console.log(balanceElement);
console.log(valueInputElement);
console.log(selectElement);
console.log(additionButtonElement);
console.log(entryListElement);*/

function addEntry (amount, operation) {
  const listEntry = document.createElement("li");
  listEntry.classList.add(operation);

  const listEntryValue = document.createElement("strong");
  listEntryValue.innerText = amount + "$";

  const listEntryDescription = document.createElement("em");
  listEntryDescription.innerText = "Description";

  const listEntryOperator = document.createElement("span");

  if (operation === "income") {
    listEntryOperator.innerText = "+";
  } else if (operation === "expense") {
    listEntryOperator.innerText = "-";
  }

  listEntry.appendChild(listEntryDescription);
  listEntry.appendChild(listEntryOperator);
  listEntry.appendChild(listEntryValue);

  entryListElement.appendChild(listEntry);
}
function updateBalance() {
  let total = 0;
  console.log(entryListElement.children); 
  for(let item of entryListElement.children) {
  const valueElement = item.querySelector("strong");
  const operationElement = item.querySelector("span");

  const value = parseFloat(valueElement.innerText);
  const operation = operationElement.innerText;
    if ( operation === "+" ) {
      total = total + value;
    } else if ( operation === "-" ) {
      total = total - value;
    }
  }
  balanceElement.innerText = total + "$";
}

additionButtonElement.onclick = function () {
  //console.log("Button was clicked");
  const amount = valueInputElement.value;
  const operation = selectElement.value;
  //console.log(amount, operation);

  addEntry(amount, operation);
  valueInputElement.value = "";
  updateBalance();
};  