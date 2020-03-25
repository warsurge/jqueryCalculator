$(document).ready(function() {

    // Your code here...
    // How will you capture button clicks? .on
    // What will you do with the numbers clicked? change text numbers and append
    // What will you do when the operator is clicked? math.floor(math)
    // How will you differentiate numbers from operators? value attr
    // How will you know the "value" of a number clicked? 
    // How will you know when a user is done entering the first number? operator
    
    $(document).on("click", function() {
        event.preventDefault();
        clickEventHandler(event);
    })
});

function clickEventHandler(event) {
    targetElement = event.target;

    if (targetElement.className.indexOf("btn") > -1) {
        console.log(targetElement);
        targetValue = targetElement.getAttribute("value");

        alert("You pressed " + targetValue);
    }
}
    