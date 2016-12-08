console.log('linked');

var getExpenseButton = document.querySelector('#addButton');
//var expenseTotal = 0;
var getExpenseHeader = document.querySelector('.expense-thead');
var getAmountHeader = document.querySelector('.amount-thead');

getExpenseButton.addEventListener('click', handleAddButton);
// getExpenseHeader.addEventListener('click', handleSortExpense);
getAmountHeader.addEventListener('click', handleSortAmount);

// returns expense item as TR
function handleAddButton(){
  var itemToAdd = document.createElement('TR');
  itemToAdd.classList.add('expense');
  itemToAdd.appendChild(createExpenseName());
  itemToAdd.appendChild(createExpenseAmount());
  itemToAdd.appendChild(createDeleteButton());

  var table = document.querySelector('.expenses');
  table.appendChild(itemToAdd);
  updateTotal();
}
// returns the expense name as TD
function createExpenseName(){
  var expenseName = document.createElement('TD');
  var value = document.querySelector('.expenseName').value;
  if(!value){
    return console.log('Enter a name');
  }
  expenseName.textContent = value;
  return expenseName;
}
// returns expense amount as TD
function createExpenseAmount(){
  var expenseAmount = document.createElement('TD');
  var value = document.querySelector('.expenseAmount').value;
  if(!value){
    return console.log('Enter an amount');
  }
  expenseAmount.classList.add('amount');
  expenseAmount.textContent = value;
  return expenseAmount;
}
// returns delete button as TD
function createDeleteButton(){
  var button = document.createElement('button');
  button.classList.add('delete');
  button.textContent = 'Delete';
  button.addEventListener('click', handleDeleteButton)
  return button;
}
// return updated expense total
function updateTotal(){
  var amountList = document.querySelectorAll('.amount');
  var total = document.querySelector('.total');
  var sum = 0;
  for(var i=0; i<amountList.length; i++){
    sum += Number(amountList[i].textContent);
  }
  total.textContent = sum;
}
function handleDeleteButton(){
  var button = document.querySelector('.delete');
  button.parentNode.remove();
  updateTotal();
}
// function handleSortExpense(){

// }
function handleSortAmount(){
  var numList = document.querySelector('.tBody').getRows();
  console.log('list', numList);
  numList.sort(function(expenseA, expenseB){
    return expenseA[1].textContent - expenseB[1].textContent;
  });
  console.log(numList);
}
