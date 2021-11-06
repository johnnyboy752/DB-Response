//add the submit event listener to the form
document.getElementById("arraySortForm").addEventListener("submit", arraySortForm);

//
function arraySortForm(event) 
{
    // preventDefault method prevents the browser from clearing user-input entries when the user submits the form
    event.preventDefault();

    // make a variable for the input
    //get the input from the form
    var input = document.getElementById("input").value;

    // make a variable for the output
    var output;

    //split the input into an array by the commas
    var inputArray = input.split(',');
    
    //get the array size
    var arraySize = inputArray.length;

    //trim whitespace around each element
    for (let i= 0; i < arraySize; i++) {
        inputArray[i] = inputArray[i].trim();
    }

    //make sure the array has at least three elements
    if (arraySize >= 3) 
    {
        //use for loops to do a bubble sort
        for (let i = 0; i < arraySize - 1; i++) {
            for (let j = 0; j < arraySize - 1; j++) {
                if (inputArray[j] > inputArray[j+1]) {
                    var k = inputArray[j];
                    inputArray[j] = inputArray[j+1];
                    inputArray[j+1] = k;
                }
            }
        }
        //make output string
        output = "The data in ascending order is: ";
        for (let i = 0; i < arraySize; i++) {
            output += inputArray[i];
            output += ",";
        }

    } 
    else 
    {
        output = "Please enter at least three strings seperated by commas."
    }

    //show the output string
    document.getElementById("output").innerHTML = output.replace(/,\s*$/, "");
}