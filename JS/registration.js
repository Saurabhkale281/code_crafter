
// function seterror(id, error) {
//     //sets error inside tag of id

//     element = document.getElementById(id);
//     element.getElementsByClassName('formerror')[0].innerHTML = error;
// }

// function validateForm() {
//     var returnval = true;

//     // perform validation if validation fail, set the value returnval to false
//     var first_name = document.forms['myForm']["first_name"].value;
//     if (name.length < 5) {
//         seterror("first_name", "length of email is too short");
//         returnval = false;
//     }
//     return returnval;
// }

function handleRegistration(){
    let email = document.getElementById("email_id").value; 
    let password = document.getElementById("password").value;

    let fname = document.getElementById("first_name").value; 
    let lname = document.getElementById("last_name").value;
    let mobile_no = document.getElementById("mobile_no").value;
    // let gender = document.getElementsByName("gender").value;
    // console.log(gender);

    alert("Hey! "+fname+" "+lname+", "+" you are now part of Code Crafters" );
}

