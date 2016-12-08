var table = document.querySelector('.expenses');
var itemVal = document.querySelector('.inputItem');
var costVal = document.querySelector('.inputCost');  // value you input for cost
var totalExpense = document.querySelector('#expense-total'); //declares counter


// declares function to create new expense items
var tableItem = function (event) {

  // creates tr element
  var tableRow = document.createElement('tr');
  table.appendChild(tableRow); // appends tr to table

  // creates td elements
  var item = document.createElement('td');
  item.classList.add('expItem');
  var cost = document.createElement('td')
  cost.classList.add('expCost');

  // sets node hierarchy
  tableRow.appendChild(item); // appends item td to tr
  tableRow.appendChild(cost); // appends cost td to tr


  var inputItem = itemVal.value; // declare the inputItem value
  var inputCost = costVal.value // declare the inputCost value
  item.textContent = inputItem;
  cost.textContent = inputCost;
  itemVal.value = ''; // reset input form
  costVal.value = ''; // reset input form

  //turns input value into number and declares as total amount
  var totalAmount = parseInt(cost.textContent);
  //turns counter value into number
  var totalNumber = parseInt(totalExpense.textContent);
  //adds
  totalExpense.textContent = totalAmount + totalNumber;

};

// when a user clicks the button
// make a new table item element
var button = document.querySelector('button');
  button.addEventListener('click', tableItem);









