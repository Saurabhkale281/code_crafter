function registerUser(event) {
    event.preventDefault(); 
    // Gather data from the form
    const email = document.getElementById('email_id').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const mobileNo = document.getElementById('mobile_no').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "emailId": email,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "mobileNo": mobileNo,
      "gender": gender
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://reglogpage.onrender.com//register", requestOptions)                   //https://reglogpage-production.up.railway.app/register
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((confirmation) => {
        // console.log(result); // Log the response for debugging
        try {
            // var confirmation = JSON.parse(result);
            console.log("Confirmation:", confirmation); // Log the parsed confirmation object
            if (confirmation.message === "User already exists") {
                window.confirm("User already exists");
                window.location.href = "./Login.html";
            } else if (confirmation.message === "Registered successfully") {
                console.log("User registered successfully"); // Log message for debugging
                if (window.confirm("Registered successfully")) {
                    window.location.href = "./Login.html";
                }
            } else {
                console.log("Unexpected message:", confirmation.message);
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
    

}
