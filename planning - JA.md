> # Create a general strategy for how you will accomplish the task:

> How will you capture button clicks?
jQuery $().on("click", function () {})

> What will you do with the numbers clicked?
Number goes into #first-number until the operator
After that, number goes into #second-number

> What will you do when the operator is clicked?
Swap over to the #second-number tag

> How will you differentiate numbers from operators?
Use the "value" attribute on the tag

> How will you know the "value" of a number clicked?
The "value" attribute.

>How will you know when a user is done entering the first number?
They'll hit an operator button.



# Global Variables
- _firstNumber_ - to store and append the first number so we don't have to keep calling the HTML tag all the time.
- _operator_ - to store the operator.
- _secondNumber_ - to store and append the second number.


# Process Flow
1. Screen Renders

## Primary user loop
### First number
2. User clicks a number (or presses a key?)
    a. If the button is a number:
        i.  If we don't have a total, we append the digit to the number.
        ii. If we have a total, we reset, clear the screen, and start with that number in the first position.
    b. If the button is an operator:
        i.  If we don't have the first digit yet, we ignore it.
        ii. If we have the first digit, we capture the operator.
        iii. If we already have an operator but not the second number yet, we change the operator.
        iv. If we have the second number yet, we ignore it because we aren't doing subtotals.
    c. If the button is the minus key:
        i. If we don't have the first digit yet, we ignore it because we aren't accepting negatives?
        ii. Otherwise, see b.
    d. If the button is the clear key: 
        i. If we don't have the first digit yet, we ignore it.
        ii. If we have a number, we erase the current number.
        iii. If we have the operator but not a second number yet, we reset.
    e. If the button is the equals key:
        i. If we have a second number, we do math and output the total.
        ii. Otherwise, we ignore it.
3. We append the number in the #first-number tag.
4. We update the screen.
5. Return to Step 2. If the user clicks an operator, proceed to Step 6.

### Operator
6. User clicks an operator (or presses the key--make sure not to preventDefault() if the user presses Shift?)
7. We capture the operator in the #operator tag.
8. We update the screen.
9. Return to Step 2. If the user clicks the equals, proceed to Step 10.

### Second number
10. User clicks a number (or presses a key?)
11. We append the number in the #second-number tag.
12. We update the screen.
13. Return to Step 2. If the user clicks Equals, proceed to Step 14.

### Total
14. User clicks the Equals button (or presses a key?)
15. We math. With variables.
16. We display the total in the #result tag.
17. User has to click the Clear button to return to Step 1???


# What we need:

## Code we'll need
- Click Event Handler
- Keydown Event Handler?
- Math for adding, subtracting, multiplying, dividing, exponentiation
- Rendering Values to the screen

## Functions we'll need
???
