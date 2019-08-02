const a = "gio";
//get the element you are going to work with
const button = document.getElementById("pushMe");

//create the function that is going to work as a callback
function change() {
    alert("You pushed me");
}
button.addEventListener("click", change);
