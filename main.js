var inputAmt = document.querySelector('.expense-amount');
var inputName = document.querySelector('.expense-name');
var button = document.querySelector('.add-expense');
var sumSpan = document.querySelector('.expense-total');
var table = document.querySelector('.expenses');
var form = document.querySelector('form');
var sum = [0];


// var handleEnter = function(e) {
//   if (e.keyCode === 13) {
//     console.log('returnd');
//     e.preventDefault();
//   }
// };
// inputAmount.addEventListener('keyup', handleEnter);
// inputName.addEventListener('keyup', handleEnter);

var handleButton = function(e) {
  // console.log('buttond');
  e.preventDefault();

  sum.push(Number(inputAmt.value));

  var newRow = document.createElement('tr');
  table.appendChild(newRow);

  var nameCol = document.createElement('td');
  nameCol.classList.add('nameTD');
  nameCol.textContent = inputName.value;
  newRow.appendChild(nameCol);

  var amtCol = document.createElement('td');
  amtCol.classList.add('amtTD');
  amtCol.textContent = inputAmt.value;
  newRow.appendChild(amtCol);

  var delCol = document.createElement('td');
  delCol.classList.add('rmv');
  var delBttn = document.createElement('button');
  delBttn.textContent = 'delete';
  delCol.appendChild(delBttn);
  newRow.appendChild(delCol);
  inputAmt.value = '';
  inputName.value = '';


};
button.addEventListener('click', handleButton);

var handleDelete = function(e) {
  var delRow = event.target.parentNode.parentNode.remove();
  // delRow.parentNode.remove();

  //target value in row being deleted
  // var tdVal = event.target.parentNode.parentNode.querySelector('.amtTD').textContent;
  // sumSpan.innerHTML = sumSpan - tdVal;
  // var subVal = tdVal.textContent;
  // var subVal = tdVal;
  // console.log(subVal);//.textContent;
  //subtract value from total in p's span

}

table.addEventListener('click', handleDelete);


var updateSum = function(e) {
  sumSpan.textContent = sum.reduce(function(a,b) {
    return a + b;
  }, 0);
}
document.body.addEventListener('click', updateSum);

// var handleInputAmt = function(e) {
//     console.log('numd');
//     e.preventDefault();
// };
// inputAmt.addEventListener('keyup', handleInputAmt);



// var handleInputName = function(e) {
//   console.log('named');
// };
// inputName.addEventListener('keyup', handleInputName);



var handleSum = function(e) {
  console.log('sumd');
};
