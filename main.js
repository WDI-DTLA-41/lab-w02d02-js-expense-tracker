var chkBook = document.querySelector('.expenses');

var makeAgendaItems = function(event) {

  var activities = document.querySelector('.stuff');
  var bill = document.querySelector('.money');

  var agendaStuff = document.createElement('li');
  var spentMoney = document.createElement('li');

  agendaStuff.setAttribute('class', 'things');
  spentMoney.setAttribute('class', 'costs');

  activities.appendChild(agendaStuff);
  bill.appendChild(spentMoney);

}

var createItem = document.getElementById('add-expense');

createItem.addEventListener('click', makeAgendaItems);
