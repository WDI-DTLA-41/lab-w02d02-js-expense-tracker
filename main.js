var button = document.querySelector('#add-expense');

//when button is clicked
//add a new tr with two children- amount and name

var expName = document.querySelector('#name');
var amount = document.querySelector('#amount');

var counter = function() {
  var expTable = document.querySelector('tbody');
  var total = document.querySelector('.expense-total');
  amtSum = 0;
  for (i=2; i<=expTable.children.length; i++) {
      var addThis = document.querySelector('.amt').innerText;
      amtSum = amtSum + parseInt(addThis);
      totalNum = parseInt(amtSum);
      total.innerHTML= totalNum;
  }
}

var addExp = function(evt) {
  console.log('clicked');
  evt.preventDefault();
  var newExp = document.createElement('tr');
  var expTable = document.querySelector('tbody');
  newExp.innerHTML = '<td class="exp">' + expName.value + '</td><td class="amt">' + amount.value + '</td>';
  expTable.appendChild(newExp);
  counter();
}



button.addEventListener('click', addExp)


