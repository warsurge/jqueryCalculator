$(document).ready(function () {

    var firstNumber = "";
    var operator = "";
    var secondNumber = "";


    // Your code here...
    // How will you capture button clicks? .on
    // What will you do with the numbers clicked? change text numbers and append
    // What will you do when the operator is clicked? math.floor(math)
    // How will you differentiate numbers from operators? value attr
    // How will you know the "value" of a number clicked? 
    // How will you know when a user is done entering the first number? operator

    $(".btn").on("click", function (event) {
        let targetValue = $(this).attr("value");
        let targetText = $(this).text();

        if (targetValue !== null) {
            //  Button press resolution goes here.
            storeNumber(targetValue, targetText);
        }
    })

    function storeNumber(numberValue, numberText) {
        if (!isNaN(numberValue)) {
            if (operator == "") {
                firstNumber += numberValue;
                $("#first-number").text(firstNumber);
            } else {
                secondNumber += numberValue;
                $("#second-number").text(secondNumber);
            }

        } else if (numberValue != "clear") {
            operator = numberValue;
            $("#operator").text(numberText);
        }
    }
    function result() {
        var total
        var number1 = parseInt(firstNumber)
        var number2 = parseInt(secondNumber)
        switch (operator) {
            case "plus":
                total = number1 + number2;
                break;
            case "minus":
                total = number1 - number2;
                break;
            case "times":
                total = number1 * number2;
                break;
            case "divide":
                total = number1 / number2;
                break;
            case "power":
                total = number1 ^ number2;
                break;
        }
    }
});
