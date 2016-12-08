console.log('holla from js');

var expenseName = document.forms[0].querySelector('input[name="expense-name"]');
var expenseAmount = document.forms[0].querySelector('input[name="expense-amount"]');
var expenseTableHead = document.querySelector('.expenses').children[0];
var expenseTableBody = document.querySelector('.expenses').children[1];
var inputForm = document.querySelector('.inputForm');
var pressButton = document.querySelector('#add-expense');
var totalExpense = document.querySelector('.expense-total');
// var tableArr = [];

var handleClick = function(evt) {
  //gaurd against blank rows
  if (expenseName.value === '' || expenseAmount.value === '') {
    //broken error message next to button
    // var error = document.createElement('p')
    // error.textContent = 'Blank expenses, scrub?'
    // inputForm.appendChild(error);
    alert('Enter your expenses, scrub');
  } else {
  //create new table row
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td>' + expenseName.value + '</td><td>' + expenseAmount.value + '</td><button class="deleteButton" type="button">Delete</button></td>';
    expenseTableBody.appendChild(newRow);
    //push rows as objects to tableArr
    tableArr = [];
    for (var i = 0; i < expenseTableBody.rows.length; i++){
      tableArr.push({
        name: expenseTableBody.rows[i].cells[0].textContent,
        amount: expenseTableBody.rows[i].cells[1].textContent
      })
    }
    var sum = tableArr.reduce(function(a,b){
      return +a + +b.amount;
    }, 0);
    // console.log(sum);
    totalExpense.textContent = sum;
    // expenseName.value = '';
    // expenseAmount.value = '';
  }

};


pressButton.addEventListener('click', handleClick);

var buttonDelete = function(evt) {
  if (event.target.classList.contains('deleteButton')){
    event.target.parentNode.remove();
    var newTotal = +totalExpense.textContent - event.target.previousSibling.textContent;
    totalExpense.textContent = newTotal;
  }
}

expenseTableBody.addEventListener('click', buttonDelete);

//SORT


// http://jsfiddle.net/uNvmT/1/
// http://stackoverflow.com/questions/8231310/convert-table-to-an-array
// https://jsfiddle.net/m1rzupv0/
// http://stackoverflow.com/questions/14267781/sorting-html-table-with-javascript
// http://jsbin.com/jugorov/1/edit?js,console
// http://jsfiddle.net/zscQy/
// http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
