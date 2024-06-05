 /*** 'If' Conditional statements ***/

// 1. Declare two variables: 'userName' with your username ; and 'isLoggedIn'with true as value.
const userName = 'deep0033'
const isLoggedIn = true
const role = 'admin'
// 2. Display the message 'Welcome, <username>' only if the user is logged in; output the message using the HTML element with id 'loginMessage'
const $loginMessage = document.getElementById('loginMessage')
if (isLoggedIn === true){
    // $loginMessage.textContent = 'Welcome, ' + userName
       // $loginMessage.textContent = 'Welcome,<username>'
 if(role == 'admin'){
    $loginMessage.textContent ='Welcome, ' + username + '. You have access to all features.'
 } else {
    $loginMessage.textContent = 'Welcome, ' + userName + '. You can change the content.'
 }

} else {
    $loginMessage.textContent = 'Welcome guest!'
}

// 3. Display a different message when the user is not logged in.

// 4. Display different messages based on the 'role' of the user.



/*** 'Switch' Conditional statements ***/
// 1. Declare the following variables
    //'$loginStatus' with the reference to the DOM element that contains the ID 'loginStatus'
    
    //'loginCase' with 0 as value
    //'login   Icon' without any value assigned to it.

// 2. Create a switch statement to compare values from 0 to 3
switch (key) {
    case value:
        
        break;

    default:
        break;
}

    //Assign the string value representing the name of an image to the 'loginIcon' variable for each case.

    // loginIcon = 'pass.png' 
    // loginIcon = 'info.png' 
    // loginIcon = 'warning.png' 
    // loginIcon = 'error.png' 
    // loginIcon = 'unknown.png'

// 3. Reasign the 'source' attribute, of the HTML element with the id 'loginStatus', use the concatenation of the string 'img/' and the variable 'loginIcon'


/*** Conditional statement - Practice  ***/

//Replicate toggle functionality using conditional statements
// 1- Target the element with the id 'hero' and save it in a variable named $hero

function toggleDarkMode(){
    //2- Conditional statement here. Use the classList methods to add and remove the class 'text-bg-dark' to the element with the id 'hero'

}




/*** Functions ***/

// 1. String functions
console.log('Hello'.toUpperCase())
console.log(Math.round(Math.random()*5))
// 2. Write a function that prints in the console the parameters 'firstName' and 'lastName'
function printName(firstName, lastName){
    console.log('Hello' ${firstName} ${lastName})
}
printName('deep','sandhu')
// 3.Write a function that prints a new blog in the document

// Declare the function 'addPost' that receives two parameters. Those parameters are going to be used to displaye the blog's title and category.


    //use the element with the ID 'blogsContainer' to insert the post
    `<div  class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${category}</strong>
                <h3 class="mb-0">${title}</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="stretched-link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
        </div>
    </div>`


// Retrieve the element that allows the user to print a new blog and save it in $addPostBtn


//addEventListener() is used to listen for a click event on $addPostBtn, and when it occurs, it executes the anonymous function
element.addEventListener('click', function () {
    //Body of the anonymous function: use the values from the blogs array to call the function 'addPost' and print a new blog
    
    //Add a conditional statement to print something different when there is no more blogs to show. Note: this only works with 4 blogs in the array, later we will use a more dynamic approach

    // shorthand to add 1 to the index variable
    
})
