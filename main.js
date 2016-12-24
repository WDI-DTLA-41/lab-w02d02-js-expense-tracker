console.log('linked!');

// get the table
var table = document.getElementById('expensesTable');

// Expense Name and amount
var expenseAmInput = document.getElementById('expenseAmountInput');
var expenseNmInput = document.getElementById('expenseNameInput');

// Current Expenses
totalExpenses = 0;
var countExpenses = function() {
    totalExpenses = document.querySelectorAll('tr').length - 1;
    document.getElementById('currentTotalExpenses').innerHTML = totalExpenses;
};


// function for adding an expense
var addExpense = function() {
    console.log('clicked!');
    if (expenseAmInput.value == "" || expenseNmInput.value == "") {
        return false;
    }
    addExpensesToTable();
    countExpenses();

};


// Add Event Listener to Button
var addButton = document.querySelector('#addButton');
addButton.addEventListener('click', addExpense);



// function for adding expenses to a table
var addExpensesToTable = function() {
    var row = table.insertRow(table.rows.length);
    var exp = row.insertCell(0);
    var amnt = row.insertCell(1);
    var deleteRow = row.insertCell(2);
    delRowContent = document.createElement('button');
    delRowContent.classList.add('remove');
    delRowContent.innerHTML = "Delete it good";
    deleteRow.appendChild(delRowContent);
    exp.innerHTML = expenseNmInput.value;
    amnt.innerHTML = expenseAmInput.value;

    expenseNmInput.value = "";
    expenseAmInput.value = "";
};


// add event listener to delete button to remove table row
table.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('remove')) {
        console.log('Button was clicked');
        console.log(evt);
        console.log(evt.target.parentNode.parentNode);
        evt.target.parentNode.parentNode.remove();
        countExpenses();
        return true;
    }
});



// Table Sorting
var sortButton = document.getElementById('sort-button');
// Add Event Listener to sort button
sortButton.addEventListener('click', sortTable);


var sortTable = function() {
    console.log('clicked sort!');
    // get the Table rows
    tableRows = table.querySelectorAll('tr');

    // create array of table rows
    // sort that way
    // tableRows is a nodeList not an array get it in an array with array.from
    // function to convert nodeList to Array
    var convertToArray = function(arr) {
        return Array.from(arr);
    };

    // This is the array
    tableRows = convertToArray(tableRows);
    // Remove the table header row
    tableRows.shift();

    // Sorts in Descending Order
    tableRows.sort(function(a, b) {
        return a.childNodes[1].innerHTML + b.childNodes[1].innerHTML;
    });

    // add the ordered items back to the table
    for (var i = 0; i < tableRows.length; i++) {
        table.appendChild(tableRows[i]);
    }

};
