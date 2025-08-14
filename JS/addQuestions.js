// Function to handle form submission for adding questions
function addQuestion(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Gather data from the form
    const technology = document.getElementById('technology').value;
    const level = document.getElementById('level').value;
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctOption = document.getElementById('correct_option').value;

    // Create a JSON object for the request body
    const questionData = {
        technology: technology,
        proficiencyLevel: level,
        questionText: question,
        options: [option1, option2, option3, option4],
        correctOption: correctOption
    };

    // Set up the headers and request options
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(questionData),
    };

    // Send the request to the backend
    fetch("https://reglogpage-1.onrender.com/api/questions/add", requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(result => {
        console.log("Server response:", result);
        if (result.id) { // Assuming the response contains the saved question's ID
            alert("Question added successfully!");
            document.getElementById('questionForm').reset(); // Clear the form fields
        } else {
            alert("Failed to add question. Please try again.");
        }
    })
    .catch(error => {
        console.log('Error:', error);
        alert("An error occurred. Please try again.");
    });
}
