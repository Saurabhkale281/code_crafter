function loginUser(event) {
    // Gather data from the form
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email_id').value;
    const password = document.getElementById('password').value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email_id": email,
        "password": password,
    });
    console.log(raw);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://reglogpage.onrender.com/login", requestOptions)                   //https://reglogpage-production.up.railway.app/login
    .then(response => response.json()) // Parse the response as JSON
    .then(result => {
        console.log("Server response:", result);
        // var confirmation = JSON.parse(result);
        if (result.message === "Login Success") {
            // Redirect to the quizz page upon successful login
            window.location.href = "./SelectTechnology.html";                          //./quizz.html
        } else {
            // Display an error message for failed login attempts
            console.log("Login failed: " + result.message);
            alert("Login failed. Please check your credentials.");
        }
    })
    .catch(error => console.log('error', error));

}
