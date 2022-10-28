// file name: Assig.js
// Name: Menal Humeda
// Student ID:301160220
// Date:03/10/2022

function contactMe()
{
    var firstname = document.getElementById("Fname").value;
    var lastname = document.getElementById("Lname").value;
    var phoneNumber = document.getElementById("PhoneNum").value;
    var message = document.getElementById("mesg").value;
   
}
var send = document.getElementById("send");
send.addEventListener("click", contactMe, false);
