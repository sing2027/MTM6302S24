/*** DOM ***/
// Use the console to print the document title and the URL



/*** Finding HTML Elements ***/
//Select the element with the id = main. Store the returned value in a variable.



//Select an element using a CSS selector. Target the first link within the 'nav' element.


//Target all links in the nav element




//Pattern CSS selectors
//select all elements in the document whose href attribute value starts with "https"

//select all elements in the document whose href attribute value contains the string "cdn"


/*** Traversing the DOM  ***/
// Return all child elements of the main node
console.log($main.children)

// Return the first child node(that is an element node) of main
console.log(main.firstElementchild)

// Return the next sibling element of main
console.log(main.nextElementSibling)


/*** Manipulating attributes */
//Obtain the href attribute of $navFirstOption
console.log($firstNavlink.getAttribute('.href'))

//exception calling attributes as properties
// console.log( $main.className )


//setAttribute()    
//Set the ID 'hero' on the first 'div' element inside the 'main' element.


//Add 'text-bg-dark' class to the element with id hero; warning!


//Add the 'href' attribute to the 'continue reading...' hero link; https://imdac.github.io/mtm6302/


//set the 'target' attribute of the link to '_blank'

// console.log($heroCTA.getAttribute('class')); // text-white fw-bol
// console.log($heroCTA.getAttribute('href')); // https://imdac.github.io/mtm6302/
// console.log($heroCTA.getAttribute('target')); // _blank

//removeAttribute()
//Remove the attribute 'target' from the 'continue reading...' link




/*** Manipulating classes ***/
// console.log(   $hero.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]
// Add class 'text-bg-dark' to the element with id 'hero'

// console.log($hero.classList)         // ["p-4 p-md-5 mb-4 rounded position-relative text-bg-dark"]

// Remove class
// Remove the class 'text-bg-dark' from the element with id 'hero

// console.log(element.classList)      // ["p-4 p-md-5 mb-4 rounded position-relative"]

//Toggle class
//Retreive the 'dark mode' button, and save it to $darkModeBtn

// $darkModeBtn.addEventListener('click', function() {
    // toggle class here

// })


//contains() and boolean condition
// console.log($hero.classList.contains('position-relative')) // true
// console.log($hero.classList.contains('text-bg-dark'))      // false

//blog data
const blogs = [
    {
        category: 'World',
        title: 'Featured post',
        date: 'Nov 12',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        link: 'https://imdac.github.io/'
    },
    {
        category: 'Design',
        title: 'Post title',
        date: 'Nov 11',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        link: '#'
    }
]
// Set the first post title using textContent
const $postTitle = document.querySelector('.post-title')
$postTitle.texContent = blogs[0].title

// Set the first post using innerHTML

const $post = document.querySelector('.post')
$post.innerHTML