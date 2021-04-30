function checkCreds() { // Place to store first name
    var firstName = document.getElementById("fName").value;
    // Place to store last name
    var lastName = document.getElementById("lName").value;
    // Place to store badge Id
    var badgeId = document.getElementById("bNumber").value;
    // Place to store full name, I don't understand the syntax here...why is it not simply firstName+lastName?
    var fullName = firstName + " " + lastName;
    //doc.write used to test the var, comment out when not in use *DEBUG TOOL*
    //document.write(fullName);

    //Set the maximum amount of characters used for a login,  '.length' counts the number of characters 
    //This is done to ensure users do not overload the system
    if (fullName.length > 20 || fullName.length == 1 || fullName.length == 0) {
        document.getElementById("loginStatus").innerHTML = "Full name Invalid!"
    }
 //Set the maximum amount of characters used for badgeId
    else if (badgeId > 999 || badgeId < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number!"
    }
//allowing acces with a printed alert box once the conditions are met. taking us to the next page
    else {
        alert("Acess Granted! Welcome " + fullName);
        location.replace("UATSpace.html")
    }
}