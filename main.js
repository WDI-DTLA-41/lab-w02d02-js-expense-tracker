var amountInput = document.querySelector('.amountInput');
var amountEntered = function(event) {
  event.target.value
}
amountInput.addEventListener('keyup', amountEntered)

var nameInput = document.querySelector('.nameInput');
var button = document.querySelector('#add-expense');
var total = document.querySelector('.expense-total');



var handleButtonClick = function(event){
  // add Expense Input into new tr/td
  var newTR = document.createElement('tr');

  var nameTD = document.createElement('td');
  nameTD.textContent = nameInput.event.target.value;
  newTR.appendChild(nameTD);

  var amountTD = document.createElement('td');
  amountTD.textContent = amountInput.event.target.value;
  newTR.appendChild(amountTD);

  // update Total

  //
}

button.addEventListener('click', handleButtonClick)
