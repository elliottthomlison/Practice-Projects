// global variables
const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody')

// listeners
loadEventListeners()

function loadEventListeners() {
    
    //when a new courses is added 
    courses.addEventListener('click', buyCourse)
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
}
