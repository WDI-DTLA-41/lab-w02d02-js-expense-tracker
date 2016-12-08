// console.log("ello");

// queries the expense input field
var expenseInput = document.querySelector("#expense-name");

// queries the amount input field
var amountInput = document.querySelector("#expense-amt");

// where new expense rows will be appended
var table = document.querySelector("#expenses");

// where event listener will be attached - "click"
var addButton = document.querySelector("#add-expense");

// queries the expense total in span
var total = document.querySelector("#total");

expenseInput.focus();

var handleAddExpense = function() {
  // console.log("button clicked!");
  // console.log(event);
  // console.log(event.target);

  if (expenseInput.value !== "" && amountInput.value !== "") {

    // =========================================
    // ADDS INPUT AMOUNT TO COUNTER TOTAL
    // =========================================

    // convert amountInput text to number
    var amountNumber = parseInt(amountInput.value);
    // console.log(amountNumber);

    // convert span #total text to a number
    var totalNumber = parseInt(total.textContent);
    // console.log(totalNumber);

    // take the amount input value and add to the total
    total.textContent = totalNumber + amountNumber;

    // =========================================
    // APPENDS TD & TR TO EXPENSE TABLE
    // =========================================

    // creates tr
    var tr = document.createElement("tr");
    // creates td's
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    // append td's to tr
    tr.appendChild(td1);
    // set expense td class to "expense"
    td1.setAttribute("class", "expense");
    // set text content to expense name input value
    td1.textContent = expenseInput.value;

    // append amount td to table
    tr.appendChild(td2);
    // set amount td class to "amount"
    td2.setAttribute("class", "amount");
    // set text content to expense amount input value
    td2.textContent = amountInput.value;

    // append new tr to table
    table.appendChild(tr);

    // clears input field
    expenseInput.value = "";
    amountInput.value = ""
    expenseInput.focus();

  }
};

addButton.addEventListener("click", handleAddExpense);



