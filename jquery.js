document.addEventListener("DOMContentLoaded", function() {
    let clientLogo = document.getElementById("clientlogo");
    let clone = clientLogo.cloneNode(true); // Clone the list
    clientLogo.parentNode.appendChild(clone); // Append the clone to the parent
});
