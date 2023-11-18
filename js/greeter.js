$(document).ready(function(){

    // stores user inputted name to local storage
    $("#nameButton").click(function(){

        let firstName = $("#firstName").val();

        // capitalizes the user's first name for ✨aesthetics✨
        let capitalizedName = capitalize(firstName);

        localStorage.setItem("firstName", capitalizedName);

        console.log(capitalizedName);

        $("#greeter").text(`Hello, ${capitalizedName}!`);
    });

    // if there's already a name in storage, it displays it on page load

    if(localStorage.getItem("firstName")){
        let firstName = localStorage.getItem("firstName");
        $("#greeter").text(`Hello, ${firstName}!`);
    }
});

// capitalizes the first char in name
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}