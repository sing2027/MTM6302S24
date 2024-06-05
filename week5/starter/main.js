const tshirts = [
    { id: 1, title: 'Blue T-Shirt', image: 'blue-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { id: 2, title: 'Bright Purple T-Shirt', image: 'bright-purple-t-shirt.jpg', price: 5.99, stock: 1, quantity: 1 },
    { id: 3, title: 'Cobalt Blue T-Shirt', image: 'cobalt-blue-t-shirt.jpg', price: 9.99, stock: 5, quantity: 1 },
    { id: 4, title: 'Green T-Shirt', image: 'green-t-shirt.jpg', price: 6.99, stock: 0, quantity: 1 },
    { id: 5, title: 'Grey T-Shirt', image: 'blue-t-shirt.jpg', price: 4.99, stock: 2, quantity: 1 },
    { id: 6, title: 'Light Green T-Shirt', image: 'light-green-t-shirt.jpg', price: 7.99, stock: 4, quantity: 1 },
    { id: 7, title: 'Purple T-Shirt', image: 'purple-t-shirt.jpg', price: 7.99, stock: 0, quantity: 1 },
    { id: 8, title: 'Red T-Shirt', image: 'red-t-shirt.jpg', price: 6.99, stock: 3, quantity: 1 }
]
  

/*** Arrays - basics ***/

//Create an list of two categories: 't-shirts' and 'shorts'


//Target one element

//Reassign the value of the targeted element

//Add a new element; warning!
// categories[5] = 'X'


/*** Arrays - Manipulation ***/
//Add a new element to the end of the array 'categories'

//Remove the last element of the array

//Remove the first element on the array

//Add a new element to the beginin of the array

//Removes the first item, and Inserts a new one using the same function. 



/*** Array - concatenation ***/
const newProduct = [
    { 
        id: 9, 
        title: 'Teal T-Shirt', 
        image: 'teal-t-shirt.jpg', 
        price: 7.99, 
        stock: 2, 
        quantity: 1 
    }
]   

//Create a new array 'products' that combine 'users' and 'student' array


//Create a string value that contains all the elements of the 'categories' array




/*** Searching in Arrays ***/
//Obtain the index of the first item that matches the value 't-shirts'


//Check if the  array includes the element 'photography'


//Find and save any element from the categories array



/*** Loops ***/
//Use 'for counting loop' to display all categories

//Use a for...of 

//Use a for...in to display all the properties of any object



/*** Practice ***/
// Display products









// Displays categories
const $categories = document.getElementById('categories')
const categoriesTemplate = []
for(const category of categories){
    categoriesTemplate.push( `
    <li class="nav-item">
        <a href="#"  class="nav-link btn btn-light btn-sm rounded-0 mx-1 ${category === 't-shirts' ? 'active' : ''}">${category}</a>
    </li>`)
}
$categories.innerHTML = categoriesTemplate.join('')