# 💸 Expense Tracker

You've been tasked with building an Expense tracker for a client.

Their requirements are as follows:

"I want to keep a running tally of all my expenses."

## MVP

When a user visits the site they should see... 

- the text "Expense Report"
- an input field to enter an amount
- an input field to enter an expense name 
- a button that says "Add expense"
- the text "Total Expenses: 0"

When a user enters an amount and a name for the expense and clicks "Add expense"...

- they should see the name and amount of the expense, under "Expenses".
- the text "Current Expenses: 0" should increase by the amount added

![](assets/asset2.png?raw=true)

### Feature Request!

- [ ] The client would prefer the data be displayed as a [table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table).

"Can we have a table with 'Expense' and 'Amount' as headers?"

![](assets/asset1.png?raw=true)

### Feature Request!

The client enjoys adding expenses, but they can't enter them perfectly every time

"I'd like to be able to remove an expense and add it again. Can you put a Delete button next to each added expense?"

When a user adds an expense then clicks "Delete"...

- they should see the "Current Expenses" total decrease by that expense amount
- they __shouldn't__ see the expense they removed

![](assets/asset3.png?raw=true)

### Feature Request!

The client is enjoying adding and removing expenses but they'd like to
see what all their big expenses are.

"I'd like to be able to sort the expenses from highest to lowest value."

When a user has added expenses and clicks the "Amount" table header

- they should see expenses rearranged in descending order with the highest amount first and the lowest amount last

### Feature Request!

The client is enjoying sorting, but they'd like to sort from highest to lowest OR 
from lowest to highest AND sort the expense name alphabetically.

When a user has added some expenses and clicks the "Amount" table header...

- they should see the expenses rearranged in descending amount orders
- when they click "Amount" again...
- the expenses should be rearranged again, but from lowest to highest

When a user clicks on the "Expense" table header...

- the expenses should be rearranged alphabetically from "A" to "Z"
- when they click "Expense" again
- the table should be sorted from "Z" to "A"

# Resources
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Tables
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
