var table = document.querySelector('.expenses'); // id's table element and stores into a var
var itemVal = document.querySelector('.inputItem'); // id's user input for expense item and stores into a var
var costVal = document.querySelector('.inputCost');  // id's user input for expense cost and stores into a var
var totalExpense = document.querySelector('#expense-total'); // declares expense counter and stores into a var


// declares function to create new expense items
var tableItem = function (event) {
 // if (event.target || event.keyCode === 13){
  // creates tr element
  var tableRow = document.createElement('tr');
  table.appendChild(tableRow); // appends tr to table

  // creates td elements to contain expense items and expense costs
  var item = document.createElement('td');
  item.classList.add('expItem');
  tableRow.appendChild(item); // appends item td to tr

  var cost = document.createElement('td')
  cost.classList.add('expCost');
  tableRow.appendChild(cost); // appends cost td to tr

  // creates X that when clicked, removes the tr
  var eraseBox = document.createElement('td');
  eraseBox.classList.add('remove');
  tableRow.appendChild(eraseBox);
  eraseBox.textContent = 'Remove';

  // creates click event to discard notes
  eraseBox.addEventListener('click', function(event){
    event.target.parentNode.remove();
  });

  // assigns value to user input
  var inputItem = itemVal.value; // declare the inputItem value
  item.textContent = inputItem;
  itemVal.value = ''; // reset input field to blank string

  var inputCost = costVal.value // declare the inputCost value
  cost.textContent = inputCost;
  costVal.value = ''; // reset input field to blank string

  // converts input value string into number and declares as total amount
  var newInput = parseInt(cost.textContent);
  // turns counter value into number
  var totalAmount = parseInt(totalExpense.textContent);
  // adds new input cost to
  totalExpense.textContent = newInput + totalAmount;

 // }
};

// when a user clicks the button
// make a new table item element
var button = document.querySelector('button');
  button.addEventListener('click', tableItem);
  button.addEventListener('keyup', tableItem);










