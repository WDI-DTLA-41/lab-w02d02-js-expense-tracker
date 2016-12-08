var button = document.querySelector('#add-expense');
var expName = document.querySelector('#name');
var amount = document.querySelector('#amount');


//display the sum of all expense amounts

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

// add items to table

var addExp = function(evt) {
  console.log('clicked');
  evt.preventDefault();
  var newExp = document.createElement('tr');
  var expTable = document.querySelector('tbody');
  newExp.innerHTML = '<td class="exp">' + expName.value + '</td><td class="amt">' + amount.value + '</td>' + remove;
  expTable.appendChild(newExp);
  // remove items from table
  var remove = document.createElement('button');
  remove.textContent = 'Remove';
  newExp.appendChild(remove);
  var removeExp = function() {
  console.log('clicked');
  this.parentNode.remove()
}
  // add eventlistener to x
  for (var i = 0; i <= remove.length; i++) {
    remove[i].addEventListener('click', removeExp);
  }
  // run counter
  counter();
}



button.addEventListener('click', addExp)


