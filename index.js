// 


// Function to handle form submission
const getVal = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const user = document.getElementById('user').value;

    const newUser = { name, email, user };

    // Retrieve existing users from sessionStorage
    let users = JSON.parse(sessionStorage.getItem('users')) || [];

    // Add the new user to the array
    users.push(newUser);

    // Save the updated users array back to sessionStorage
    sessionStorage.setItem('users', JSON.stringify(users));

    // Redirect to user details page
    window.location.href = 'user-detail.html';
};

// Function to display user details
const displayUserDetails = () => {
    // Retrieve users from sessionStorage
    const users = JSON.parse(sessionStorage.getItem('users')) || [];

    const userDetailsContainer = document.getElementById('userDetailsContainer');
 

    // Create and append user details elements
    users.forEach(user => {
        const userDetailDiv = document.createElement('div');
        userDetailDiv.classList.add('user-detail');

        const nameP = document.createElement('p');
        nameP.textContent = 'Name: ' + user.name;

        const emailP = document.createElement('p');
        emailP.textContent = 'Email: ' + user.email;

        const userP = document.createElement('p');
        userP.textContent = 'Username: ' + user.user;

        userDetailDiv.appendChild(nameP);
        userDetailDiv.appendChild(emailP);
        userDetailDiv.appendChild(userP);

        userDetailsContainer.appendChild(userDetailDiv);
    });
};

// Check which page is loaded and execute the corresponding function
if (document.querySelector('.userForm')) {
    document.querySelector('.userForm').addEventListener('submit', getVal);
} else if (document.getElementById('userDetailsContainer')) {
    displayUserDetails();
}

