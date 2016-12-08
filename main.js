var chkBook = document.querySelector('.expenses');

var addstuffList = function(event) {
  var itemsBought = document.getElementById('expenses');
  var costSpent = document.getElementById('amount');

  var eachItem = document.createElement('li');
  var eachBill = document.createElement('li');

  eachItem.setAttribute('class', 'itemsPer');
  eachBill.setAttribute('class', 'costsPer');

  eachItem.setAttribute('contenteditable', true);
  eachBill.setAttribute('contenteditable', true);

  // agendaStuff.innerHTML=value;
  // spentMoney.innerHTML=value;
  document.getElementById('add-expense').onClick = function() {
    var totalThings = document.getElementById('thingBought').value;
    // var costsaddedIn = totalThings;
    eachItem.appendChild(totalThings);
}
  document.getElementById('add-expense').onClick = function() {
    var totalAmount = document.getElementById('spentAmount').value;
    // var itemsaddedIn = totalAmount;
    eachBill.appendChild(totalAmount);
}


  itemsBought.appendChild(eachItem);
  costSpent.appendChild(eachBill);

}

// var listStuff = function(event) {
//   document.getElementById('expenseThing').value
// }

// var listAmount = function(event) {
//   document.getElementById('expenseAmount').value
// }

var createItem = document.getElementById('add-expense')

createItem.addEventListener('click', addstuffList);


