console.log('hello World');

//declare the id of the button
var button = document.querySelector('#add-expense');
var tableBody = document.querySelector('tbody');

//declare var for input value from expense amount
var inputName = document.querySelector('#expense-name');
//declare var for input value from expense name
var inputAmount = document.querySelector('#expense-amount');


//*moved counter above click function, so they can be inititalized
//create var for counter=0
var counter;
//create var for array of table data .amount
var tdAmountArray;
//use querySelectorAll to grab all the amounts on tableExpense, than:
//create array and create for loop,
//*move counter parseInt inside the click function*


button.addEventListener('click', function(){

//should see the name and amount of the expense, under "Expenses".
//need to create three more variables: 1 table row and 2 table data's
  var tableRow = document.createElement('tr');
  var tableName = document.createElement('td');
  var tableExpense = document.createElement('td');

//adding input values to tr and td's
  tableName.textContent = inputName.value;
  tableExpense.textContent = inputAmount.value;

//append two data's to the table row
//append two td's now to tableBody (parent of tr)
tableBody.appendChild(tableRow);
tableRow.appendChild(tableName);
tableRow.appendChild(tableExpense);

//"Current Expenses: 0" should increase by the amount added
//create a class name (classList.add) to track tableExpense
tableExpense.classList.add('amount');

//var declared outside click function, set it equal to zero everytime
//click event is run, depending on the length of tdArrayAmount, run for loop
counter=0;

//moved inside so we can get the new td list
tdAmountArray = document.querySelectorAll('.amount');
//create for loop for counter
for(var i=0; i < tdAmountArray.length; i++) {
  counter += parseInt(tdAmountArray[i].textContent);
};
console.log(counter);

});


