function validateForm() {
    let fn = document.getElementById('fname').value;
    let ln = document.getElementById('lname').value;
    let bd= document.getElementById('birthdate').value;
    let s= document.getElementById('country').value;
    let c1 = document.getElementById("male").checked;
    let c2 = document.getElementById("female").checked;
    let ph = document.getElementById("mnumber").value;
    let em = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
   
    if (fn == "") {
        alert("First Name must be filled out");
        return false;
    }
    else if (ln == "") {
        alert("Last Name must be filled out");
        return false;
    }
    else if (c1 == false&&c2 == false) {
        alert("Please select a gender");
        return false;}
    else if (!bd) {
       alert("Please fill birthday field");
        return false;}
    else if (s == "0") {
        alert("Please select a country");
        return false;}
    else if (ph == "") {
            alert("Please enter a phone number");
            return false;}
    else if (em == "") {
            alert("Please enter an e-mail address");
            return false;}
    else if (pass == "") {
             alert("Please enter a password");
             return false;} 
}
function ckeckPhoneFormat()
{   let ph = document.getElementById("mnumber").value;
    let regex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    if (regex.test(ph)==false) {
        alert("Please enter a valide phone number");
        return false;} 

}
function checkmailformat()
{   let em = document.getElementById("email").value;
    let regex2=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex2.test(em)==false) {
        alert("Please enter a valide e-mail address");
        return false;
    } 
} 
function checkPasswordup() {
    let pass = document.getElementById("password");
    
    if (pass.value.length <= 7) {
        pass.style.backgroundColor = "#66cc66";
    } else {
        pass.style.backgroundColor = "#ff6666";
        document.getElementById("warning").innerHTML = " Password length must be less then 8 digit";
    }
}
function checkPasswordlength() {
    let pass = document.getElementById("password");
    if (pass.value.length >= 8) {
        alert("Please enter a valide password length (<8)");
        return false;

    }
}
function checkPasswordformat() {
    let pass = document.getElementById("password").value;
    let regex3=/^[0-9*.a-z|a-z*.0-9|A-Z]*[A-Z]+[0-9*.a-z|a-z*.0-9|A-Z]*$/;
    if (regex3.test(pass)==false) {
        alert("Please enter a valide password that must be a combination of charatacters , numbers and at least a capital letter");
        return false;} 
}
function reset_function() {
   document.getElementById('fname').value="";
   document.getElementById('lname').value="";
   document.getElementById('birthdate').value="";
   document.getElementById('country').selectedIndex = '0';
   document.getElementById("male").checked=false;
   document.getElementById("female").checked=false;
   document.getElementById("mnumber").value="";
   document.getElementById("email").value="";
   document.getElementById("password").value="";
   document.getElementById("password").style.backgroundColor="#ffffff";
   document.getElementById("warning").innerHTML="";
}
function check_empty_function(){
    let m = document.getElementById('emailtwo').value;
    let p = document.getElementById('passwordtwo').value;
    if (m == "") {
        alert("E-mail address must be filled out");
        return false;
    }
    else if (p == "") {
        alert("Password must be filled out");
        return false;
    }
}
function reset(){
    document.getElementById('emailtwo').value="";
   document.getElementById('passwordtwo').value="";
}