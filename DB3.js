function DisplayStrings() {
    //declare locale variables
    let string1 = "In Javascript, strings are internally UTF-16."

    alert(string1);     //Display the string 

    alert("The first letter of the string is...");    //Display the char value at index 0
    alert(string1.charAt(0));

    alert("The string starts with In. This is...");   //Boolean if the string beings with the argument
    alert(string1.startsWith("In"));

    alert("the string will now be lowercase");        //Display the string as lowercase
    alert(string1.toLowerCase());

    alert("THE STRING WILL NOW BE UPPERCASE");         //Display the string as uppercase
    alert(string1.toUpperCase());

    alert("The string ends with UTF-16. This is..."); //Boolean if the string ends with the argument
    alert(string1.endsWith("UTF-16."));

    
}

document.getElementById("node-id").innerHTML = "Strings are a very useful data type in Javascript, but we have to get creative when we want to use literal strings as data. This is where unicode and lexicographic translations come in handy!";
