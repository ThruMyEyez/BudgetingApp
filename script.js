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

/*console.log(balanceElement);
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
  let emotionalBalance;
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
  /* easterEgg  */
  if (total < -50) {
    emotionalBalance = "😢";
  } else if (total >= -50 && total < 0) {
    emotionalBalance = "☹";
  } else if (total >= 0 && total <= 21) {
    emotionalBalance = "😕";
  } else if (total > 21 && total <= 50) {
    emotionalBalance = "😐";
  } else if (total > 50 && total <= 100) {
    emotionalBalance = "🧐";
  } else if (total > 100 && total <= 500) {
    emotionalBalance = "🙂";
  } else if (total > 500 && total <= 2000) {
    emotionalBalance = "😄";
  } else if (total > 2000 && total <= 10000) {
    emotionalBalance = "😝"; 
  } else if (total > 10000) {
    emotionalBalance = "🤑";
  }

  balanceElement.innerText = total + `$ ${emotionalBalance}`;
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
/* BUG: #1 => round the thing to 2 digits.  */
/* ToDo IDEA: add description input field */