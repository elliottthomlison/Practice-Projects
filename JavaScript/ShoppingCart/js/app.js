// global variables
const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody'),
      clearCartBtn = document.querySelector('#clear-cart')

// listeners
loadEventListeners()

function loadEventListeners() {
    
    //when a new courses is added 
    courses.addEventListener('click', buyCourse)

    //when the remove button is clicked
    shoppingCartContent.addEventListener('click', removeCourse)
    clearCartBtn.addEventListener('click', clearCart)
}

// functions 
function buyCourse(e) {
    e.preventDefault();
 
    //use delegation to find the course that was added
    if (e.target.classList.contains('add-to-cart')) {
        // read the course values
        // we are using such a general, yet specific targetting sequence because that way it can be replicated (via delegation)
        const course = e.target.parentElement.parentElement

        // read the values
        getCourseInfo(course);
    }
}

// reads the html info of the selected course
function getCourseInfo(course) {
    // create an object with course data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    // insert into the shipping cart
    addIntoCart(courseInfo)
}

// display the selected course in the shopping cart
function addIntoCart(course) {
    // create a <tr> to fit inside the shopping cart's table 
    const row = document.createElement('tr')

    // build the template
    row.innerHTML = `
        <tr>
            <td>
                <img src="${course.image}" width=100>
            </td>
            <td>
                ${course.title}
            </td>
            <td>
            ${course.price}
            </td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>
        </tr>
    `
    //add into the shopping cart
    shoppingCartContent.appendChild(row)

    //add course into local storage
    saveIntoStorage(course)
}

//remove course from the dom
function removeCourse(e) {
    if(e.target.classList.contains('remove')){
        //this will remove the element from the dom
        e.target.parentElement.parentElement.remove();
    }
}

//clear the shopping cart
function clearCart() {
    //easier way
    // shoppingCartContent.innerHTML = '';

    //recommended way
    while(shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild)
    }
}

//add courses into local storage
function saveIntoStorage(course) {
    let courses = getCoursesFromStorage()

    //add course into the array
    courses.push(course)

    //since storage only saves strings we need to convert JSON into a string
    localStorage.setItem('courses', JSON.stringify(courses))
}

//get the contents from the local storage
function getCoursesFromStorage() {
    let courses;

    //if something exists in storage then we get the value, otherwise create an empty array
    if (localStorage.getItem('courses') === null) {
        courses = [] 
    } else {
        courses = JSON.parse(localStorage.getItem('courses'))
    } 
    return courses
}

//remove the contents from the local storage
function removeCoursesFromStorage() {

}