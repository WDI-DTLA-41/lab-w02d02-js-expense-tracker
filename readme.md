# 💸 Expense Tracker

You've been tasked with building an Expense tracker for a client.

Their requirements are as follows:

"I want to keep a running tally of all my expensives."

## MVP

When a user visits the site...
    they should see... 
    [X] - an input field to enter an amount
    [X] - an input field to enter an expense name 
    [X] - a button that says "Add expense"
    [X] - the text "Expenses"
    [X] - the text "Current Expenses: 0"

When a user enters an amount and a name for the expense...
    and clicks "Add expense"...
    they should see...
    [X] - the name and amount of the expense should be added under "Expenses"
    [X] - The text "Current Expenses: 0" should increase by the amount added

### Feature Request!

The client enjoys adding expenses, but they can't enter them perfectly every time

"I'd like to be able to remove an expense and add it again. Can you put an X next to each added expense?"

When a user enters an expense...
    and clicks "X"...
    they should see...
    [X] - the "Current Expenses" total decrease by that expense amount
    they shouldn't see
    [X] - the expense they removed

### Feature Request!

The client is enjoying adding and removing expenses but they'd like to
see what all their big expenses are.

"I'd like to be able to sort the expenses from highest to lowest value. Can we add a 'Sort' button?"

When a user has added expenses and clicks "Sort"
    they should see
    - expesnes in descending order with the highest amount first
    - and the lowest amount last
